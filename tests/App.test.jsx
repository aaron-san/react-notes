// src/tests/App.test.jsx
import React from "react";
import { describe, it, vi, test, beforeEach } from "vitest";
import {
  render,
  screen,
  fireEvent,
  act,
  cleanup,
  waitFor,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {
  Home,
  storiesReducer,
  Item,
  List,
  SearchForm,
  InputWithLabel,
} from "../src/pages/Home";

import axios from "axios";

// import { promises } from "fs";

vi.mock("axios"); // jest.mock("axios");

// Test suites can contain multiple test blocks or test cases.
// Test suites can be initiated with describe().
// Test cases can be initiated with test() or it().

describe("App", () => {
  // it("should work as expected", () => {
  //   expect(1 + 1).toBe(2);
  // });
  // test("true to be true", () => {
  //   expect(true).toBe(true);
  // });
  beforeEach(() => {
    axios.get.mockReset(); // requires: vi.mock("axios")
  });
  it("succeeds fetching data", async () => {
    // Check that the loading message is present before the data is fetched

    axios.get.mockResolvedValue({
      data: {
        hits: stories,
      },
    });

    const { queryByText, getByText, getAllByText, debug } = render(<Home />);

    expect(queryByText(/Loading/)).toBeInTheDocument();

    // Check if the loading message went away
    await waitFor(() => {
      expect(queryByText(/Loading/)).toBeNull();
    });

    expect(queryByText("React")).toBeInTheDocument();
    expect(getByText("Redux")).toBeInTheDocument();
    expect(getAllByText("Dismiss").length).toBe(2);
  });

  it("fails fetching data", async () => {
    // const promise = new Promise.reject();
    const promise = Promise.reject(new Error("failed"));

    const getError = new Error("network error");
    axios.get = vi.fn().mockRejectedValue(getError);

    // Fetch the data
    // act(
    axios.get.mockImplementationOnce(() => promise);
    // axios.get.mockResolvedValue(() => promise)
    // );

    const { getByText, queryByText, debug } = render(<Home />);
    // debug();

    expect(getByText(/Loading/)).toBeInTheDocument();

    try {
      await waitFor(() => promise);
    } catch (error) {
      expect(queryByText(/Loading/)).toBeNull();
      expect(queryByText(/went wrong/)).toBeInTheDocument();
    }
  });

  it("removes a story", async () => {
    axios.get.mockResolvedValue({
      data: {
        hits: stories,
      },
    });

    const { getAllByText, queryByText, debug } = render(<Home />);

    // debug();
    await waitFor(() => {
      expect(getAllByText("Dismiss").length).toBe(2);
    });
    expect(queryByText("Jordan Walke")).toBeInTheDocument();

    fireEvent.click(getAllByText("Dismiss")[0]);

    expect(getAllByText("Dismiss").length).toBe(1);
    expect(queryByText("Jordan Walke")).toBeNull();
  });

  // Test the search feature to make sure the correct results are returned when an initial request and subsequent request are entered.
  it("searches for React stories", async () => {
    axios.get.mockResolvedValue({
      data: {
        hits: stories,
      },
    });

    const { queryByText, getByText, queryByDisplayValue, debug } = render(
      <Home />
    ); // Shows Loading...

    expect(queryByText(/Loading/)).toBeInTheDocument();

    // Initial Render
    // First data fetching (initial rendering)
    // We expect the input field to render "React" and the two items in the list
    // await waitFor(() => reactPromise);

    // Check if the loading message went away
    await waitFor(() => {
      expect(queryByText(/Loading/)).toBeNull();
    });

    // queryByDisplayValue() returns the input, textarea, or select element that has the matching display value.
    // Should render <input ... value="React" />
    expect(queryByDisplayValue("React")).toBeInTheDocument();

    // Make sure no items related to JavaScript are rendered
    expect(queryByDisplayValue("JavaScript")).toBeNull();

    // debug();
    expect(queryByText(/Jordan Walke/)).toBeInTheDocument();
    expect(getByText("Dan Abramov, Andrew Clark")).toBeInTheDocument();
  });

  it("searches for javaScript stories", async () => {
    const anotherStory = {
      title: "JavaScript",
      url: "https://en.wikipedia.org/wiki/JavaScript",
      author: "Brendan Eich",
      num_comments: 15,
      points: 10,
      objectID: 3,
    };

    axios.get.mockResolvedValue({
      data: {
        hits: [anotherStory],
      },
    });

    const { queryByText, debug } = render(<Home />); // Shows Loading...

    expect(queryByText(/Loading/)).toBeInTheDocument();

    // Check if the loading message went away
    await waitFor(() => {
      expect(queryByText(/Loading/)).toBeNull();
    });

    expect(queryByText("Jordan Walke")).toBeNull();
    expect(queryByText("Dan Abramov, Andrew Clark")).toBeNull();
    expect(queryByText("Brendan Eich")).toBeInTheDocument();
  });

  it("searches for specific stories sequentially", async () => {
    // await act(async () => promise);
    // axios.get.mockResolvedValue({
    //   data: {
    //     hits: stories,
    //   },
    // });

    const reactPromise = Promise.resolve({
      data: {
        hits: stories,
      },
    });

    const anotherStory = {
      title: "JavaScript",
      url: "https://en.wikipedia.org/wiki/JavaScript",
      author: "Brendan Eich",
      num_comments: 15,
      points: 10,
      objectID: 3,
    };

    const javascriptPromise = Promise.resolve({
      data: {
        hits: [anotherStory],
      },
    });

    // Fetch the data
    await axios.get.mockImplementation((url) => {
      if (url.includes("React")) {
        return reactPromise;
      }
      if (url.includes("JavaScript")) {
        return javascriptPromise;
      }
      throw Error();
    });

    // Initial Render
    // First data fetching (initial rendering)
    // We expect the input field to render "React" and the two items in the list
    const { queryByText, queryByDisplayValue, getByPlaceholderText, debug } =
      render(<Home />); // Shows Loading...

    expect(queryByText(/Loading/)).toBeInTheDocument();

    // First rendering (react stories)
    await act(async () => reactPromise);

    // Check if the loading message went away
    expect(queryByText(/Loading/)).toBeNull();

    // Check that <input ... value="React" /> was rendered
    expect(queryByDisplayValue("React")).toBeInTheDocument();

    // Make sure no items related to JavaScript are rendered
    expect(queryByDisplayValue("JavaScript")).toBeNull();

    expect(queryByText("Jordan Walke")).toBeInTheDocument();
    expect(queryByText("Dan Abramov, Andrew Clark")).toBeInTheDocument();
    expect(queryByText("Brendan Eich")).toBeNull();

    // User interaction -> Search

    // Change the input field's value by firing an event
    fireEvent.change(getByPlaceholderText("Search..."), {
      target: {
        value: "JavaScript",
      },
    });

    fireEvent.submit(screen.queryByText("Submit"));

    await waitFor(() => {
      expect(queryByText("Jordan Walke")).toBeNull();
    });
    expect(queryByText("Dan Abramov, Andrew Clark")).toBeNull();
    // debug();
    expect(queryByText("Brendan Eich")).toBeInTheDocument();
  });
});

// When testing, code that causes React state updates should be wrapped into act(...):

// act(() => {
//   /* fire events that update state */
// });
// /* assert on the output */

// This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act

// test suites - describe()
// test cases - test() or it()
// assertions - expect().toBe()
// After you have rendered your React component(s), React Testing Library offers you different search functions to grab elements. These elements are then used for assertions or for user interactions.

// Define test data
const storyOne = {
  objectID: 0,
  title: "React",
  url: "https://reactjs.org",
  author: "Jordan Walke",
  num_comments: 3,
  points: 4,
};

const storyTwo = {
  title: "Redux",
  url: "https://redux.js.org/",
  author: "Dan Abramov, Andrew Clark",
  num_comments: 3,
  points: 5,
  objectID: 1,
};

const stories = [storyOne, storyTwo];

describe("storiesReducer", () => {
  test("Removes a story from all stories", () => {
    const action = { type: "REMOVE_STORY", payload: storyOne };
    const state = { data: stories, isLoading: false, isError: false };

    const newState = storiesReducer(state, action);

    // Monaco, 'Courier New', monospace
    // Menlo, Monaco, 'Courier New', monospace

    const expectedState = {
      data: [storyTwo],
      isLoading: false,
      isError: false,
    };

    // expect(newState).toBe(expectedState);  // "==="
    expect(newState).toStrictEqual(expectedState); // "=="
  });
});

// The reducer function accepts a state and an action, and then returns a new state.

describe("Item", () => {
  it("renders all properties", () => {
    const { queryByText, getByText } = render(<Item item={storyOne} />);
    expect(queryByText("Jordan Walke")).toBeInTheDocument();
    expect(getByText("React")).toHaveAttribute("href", "https://reactjs.org");
  });

  it("renders a clickable dismiss button", () => {
    const { getByRole } = render(<Item item={storyOne} />);
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("clicking the dismiss button calls the callback handler", () => {
    const handleRemoveItem = vi.fn();
    render(<Item item={storyOne} onRemoveItem={handleRemoveItem} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleRemoveItem).toHaveBeenCalledTimes(1);
  });
});

describe("SearchForm", () => {
  const searchFormProps = {
    searchTerm: "React",
    onSearchInput: vi.fn(), // jest.fn()
    onSearchSubmit: vi.fn(),
  };
  it("renders the input field with its value", () => {
    const { queryByDisplayValue } = render(<SearchForm {...searchFormProps} />);
    // Confirm that the input element is present with value="React"
    expect(queryByDisplayValue("React")).toBeInTheDocument();
    // expect(screen.getByPlaceholderText("...")).toBeInTheDocument();
  });
  it("renders the correct label", () => {
    const { getByLabelText } = render(<SearchForm {...searchFormProps} />);
    // The label "Search:" was removed as a design choice so is no longer in the SearchForm component.
    expect(getByLabelText(/Search/)).toBeInTheDocument();
  });

  // React to changes in the value of the input field
  it("calls onSearchInput on input field change", async () => {
    const { getByDisplayValue } = render(<SearchForm {...searchFormProps} />);

    fireEvent.change(getByDisplayValue("React"), {
      target: { value: "Redux" },
    });

    expect(searchFormProps.onSearchInput).toHaveBeenCalledTimes(1);
  });

  it("calls onSearchSubmit on button submit click", () => {
    const { getByRole } = render(<SearchForm {...searchFormProps} />);

    // screen.debug();
    fireEvent.submit(getByRole("button"));
    expect(searchFormProps.onSearchSubmit).toHaveBeenCalledTimes(1);
  });

  it("renders snapshot", () => {
    const { container } = render(<SearchForm {...searchFormProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
