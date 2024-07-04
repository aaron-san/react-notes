import React, {
  ChangeEvent,
  ChangeEventHandler,
  memo,
  useRef,
  useEffect,
  useState,
  useReducer,
  useMemo,
  useCallback,
} from "react";
import { initialStories } from "../components/getFunctions";
import {
  IStory,
  IState,
  ISetData,
  SearchFormProps,
  ActionType,
  Stories,
  ListProps,
  ItemProps,
  InputWithLabelProps,
} from "../types/types";
import axios from "axios";
import { List } from "../components/List";
import { SearchForm } from "../components/SearchForm";
import Notes from "../components/Notes";

// import styles from "../../public/styles/Home.module.css";

// const getAsyncStories = getAsyncStories3;

// const getSumComments = (stories: IStory[]) => {
//   console.log("C");

//   // return stories.data.reduce((result, value) => result + value.num_comments, 0);
//   return stories.reduce((result, value) => result + value.num_comments, 0);
// };

// Data
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

const storiesReducer = (state: IState, action: ISetData) => {
  // const { type, payload } = action;

  switch (action.type) {
    case "STORIES_FETCH_INIT":
      return {
        ...state, // initial state
        isLoading: true, // update isLoading
        isError: false, // update isError
      };
    case "STORIES_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        // Avoid the replacement of current data with new data by concatenating the paginated lists
        data:
          action.payload.page === 0
            ? action.payload.list
            : state.data.concat(action.payload.list),
        page: action.payload.page,
      };
    case "STORIES_FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        // data: action.payload,
      };
    case "REMOVE_STORY":
      return {
        ...state,
        data: state.data.filter(
          // data: state.filter(
          (story: any) => action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();
    // return state;
  }
};

// Custom Hook
const useSemiPersistentState = (
  key: string,
  initialState: string
): [string, (newValue: string) => void] => {
  // const isMounted = useRef(false);

  const [value, setValue] = useState(localStorage.getItem(key) || initialState);
  useEffect(() => {
    // if (!isMounted.current) {
    //   isMounted.current = true;
    // } else {
    localStorage.setItem(key, value);
    // }
  }, [value, key]);
  // The returned values are returned as an array
  return [value, setValue];
};

// const extractSearchTerm = (url: string) => url.replace(API_ENDPOINT, "");
const extractSearchTerm = (url: string) =>
  url
    .substring(url.lastIndexOf("?") + 1, url.lastIndexOf("&"))
    .replace(PARAM_SEARCH, "");

const getLastSearches = (urls: string[]) => {
  return urls
    .reduce((result: string[], url: string, index: number) => {
      const searchTerm = extractSearchTerm(url);

      if (index === 0) {
        return result.concat(searchTerm);
      }

      const previousSearchTerm = result[result.length - 1];

      if (searchTerm === previousSearchTerm) {
        return result;
      } else {
        return result.concat(searchTerm);
      }
    }, [])
    .slice(-6)
    .slice(0, -1);
};

// The API was 'https://hn.algolia.com/api/v1/search?query=react'
// Now it's 'https://hn.algolia.com/api/v1/search?query=react&page=0'

const API_BASE = "https://hn.algolia.com/api/v1";
const API_SEARCH = "/search";
const PARAM_SEARCH = "query=";
const PARAM_PAGE = "page=";

const getUrl = (searchTerm: string, page: number) =>
  `${API_BASE}${API_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`;

const Home = () => {
  // const sumComments = React.useMemo(
  //   () => getSumComments(initialStories),
  //   [initialStories]
  // );

  // const getUrl = (searchTerm: string) => `${API_ENDPOINT}${searchTerm}`;

  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "React");
  const [urls, setUrls] = useState<string[]>([getUrl(searchTerm, 0)]);

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  // const [stories, dispatchStories] = useReducer<React.Reducer<any, any>(storiesReducer, []);

  // Place all state objects related to asynchronous data fetching into a single useReducer hook
  const [stories, dispatchStories] = useReducer<React.Reducer<any, any>>(
    storiesReducer,
    // []
    { data: [], page: 0, isLoading: false, isError: false } // initial states object
  );

  // If we use "null" as default value, then mapping over a null value will result in an error; instead, use an empty list or empty string
  // const [stories, setStories] = useState(initialStories);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // Instead of using multiple useState hooks, we can incorporate the state into a single useReducer hook

  // const promise = new Promise((resolve, reject) => {
  //   resolve({ data: { stories: initialStories } });
  // });

  // const handleFetchStories = useCallback(async () => {
  //   dispatchStories({ type: "STORIES_FETCH_INIT" });
  //   const result = await axios.get(url);

  //   dispatchStories({
  //     type: "STORIES_FETCH_SUCCESS",
  //     payload: result.data.hits,
  //   });
  // }, [url]);

  const handleFetchStories = useCallback(async () => {
    // if (!searchTerm) return;

    dispatchStories({ type: "STORIES_FETCH_INIT" });
    try {
      // .json() converts from json to JS object!
      const lastUrl = urls[urls.length - 1];
      const result = await axios.get(lastUrl);

      dispatchStories({
        type: "STORIES_FETCH_SUCCESS",
        // payload: result.data.hits.slice(0, 6),
        payload: {
          list: result.data.hits,
          page: result.data.page,
        },
      });
    } catch {
      dispatchStories({ type: "STORIES_FETCH_FAILURE" });
    }
  }, [urls]);

  useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  // localStorage.getItem("search") || "React"

  // Update the local storage "search" value
  // useEffect(() => {
  //   // Save last search value to local storage in browser
  //   localStorage.setItem("search", searchTerm);
  // }, [searchTerm]);

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (searchTerm: string, page: number) => {
    const url = getUrl(searchTerm, page);
    setUrls(urls.concat(url));
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    handleSearch(searchTerm, 0);
    event.preventDefault();
  };

  const handleMore = () => {
    const lastUrl = urls[urls.length - 1];
    const searchTerm = extractSearchTerm(lastUrl);
    handleSearch(searchTerm, stories.page + 1);
  };

  // const searchedStories = stories.data.filter((story: any) => {
  //   return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  //   // return story;
  // });

  const handleRemoveStory = React.useCallback((item: IStory) => {
    // const newStories = stories.filter(
    //   (story: any) => item.objectID !== story.objectID
    // );
    // setStories(newStories);
    dispatchStories({
      type: ActionType.REMOVE_STORY,
      payload: item,
    });
  }, []);

  const handleLastSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    handleSearch(searchTerm, 0);
  };

  const lastSearches = getLastSearches(urls);

  return (
    <main className="p-[20px] text-emerald-800 bg-emerald-200 shadow-md m-2 md:m-6  items-center">
      <div className="mx-2 sm:w-[99%] lg:w-[70%] lg:mx-8 overflow-x-auto">
        {/* <Search search={searchTerm} onSearch={handleSearchInput} /> */}
        &nbsp;
        {/* <h1>My Hacker Stories with {sumComments} comments</h1> */}
        <div className="p-8 my-4 border-2 border-y-white rounded-sm bg-amber-50 overflow-x-auto">
          {/* <div className="text-12 font-bold tracking-wide;">Stories</div> */}

          <SearchForm
            searchTerm={searchTerm}
            onSearchInput={handleSearchInput}
            onSearchSubmit={handleSearchSubmit}
            data-testid="searchform"
          />
          <div className="my-2 flex flex-wrap gap-2">
            <LastSearches
              lastSearches={lastSearches}
              onLastSearch={handleLastSearch}
            />
          </div>
          <hr />
          {stories.isError && <p>Something went wrong ...</p>}
          <List
            list={stories.data}
            onRemoveItem={handleRemoveStory}
            data-testid="resolved"
          />

          {stories.isLoading ? (
            <p>Loading ...</p>
          ) : (
            <button
              type="button"
              onClick={handleMore}
              className="p-4 border border-green-300 bg-gradient-to-br from-green-400 to-green-100 text-slate-600 rounded-md hover:opacity-85"
            >
              More
            </button>
          )}
        </div>
        <Notes />
      </div>
    </main>
  );
};

interface ILastSearches {
  lastSearches: string[];
  onLastSearch: (searchTerm: string) => void;
}

const LastSearches = ({ lastSearches, onLastSearch }: ILastSearches) => {
  return (
    <>
      {lastSearches?.map((searchTerm: string, index: number) => {
        return (
          <button
            className="border border-slate-100 rounded-md text-slate-100 px-4 bg-slate-700 hover:bg-slate-600"
            key={searchTerm + index} // unstable
            type="button"
            onClick={() => onLastSearch(searchTerm)}
          >
            {searchTerm}
          </button>
        );
      })}
    </>
  );
};

export { Home, storiesReducer };

// Explanation:
// Imports and Interfaces: Import necessary modules and define TypeScript interfaces (IStory, IState, ActionType, ISetData).
// API_ENDPOINT: Define the API endpoint for fetching data.
// storiesReducer: Reducer function to manage state related to stories (IState).
// useSemiPersistentState: Custom hook to manage state with localStorage persistence.
// extractSearchTerm: Function to extract search term from URL.
// getLastSearches: Function to get the last searched terms from URLs.
// Home Component: Main component where state management, API fetching logic, and rendering of SearchForm and LastSearches components are handled.
// LastSearches Component: Component to render last searched terms as buttons.
