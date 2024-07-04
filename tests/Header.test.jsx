import React from "react";
// src/tests/App.test.jsx
import { describe, it, expect } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { Header } from "../src/components/Header";
import { BrowserRouter } from "react-router-dom";

// test suites - describe()
// test cases - it()
// assertions - expect().toBe()

describe("Header", () => {
  it("renders Header component", () => {
    act(() =>
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
    );
    screen.debug(); // Shows the html structure as output

    // check if App components renders headline
  });
});

// After you have rendered your React component(s), React Testing Library offers you different search functions to grab elements. These elements are then used for assertions or for user interactions.
