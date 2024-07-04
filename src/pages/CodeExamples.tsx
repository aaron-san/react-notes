import React, { ReactElement } from "react";
import { Fibonacci } from "../components/code-examples/memoization";

export const CodeExamples = (): ReactElement => {
  return (
    <section>
      <h2>CodeExamples</h2>
      <Fibonacci />
    </section>
  );
};

