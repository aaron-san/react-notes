import "@testing-library/jest-dom/vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import { afterEach, expect } from "vitest";
import { cleanup } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
expect.extend(matchers);
console.log("Running setupTests");
afterEach(() => {
  cleanup();
});
