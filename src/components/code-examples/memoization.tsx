import React, { ReactElement, useMemo } from "react";

export const Fibonacci = (): ReactElement => {
  const calculateFibonacci = (n: number): number => {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  };

  let n = 3;
  const memoizedResult = useMemo(() => calculateFibonacci(n), [n]);

  return (
    <div className="flex flex-col p-[20px] bg-[#83a4d4] bg-gradient-to-l from-[#b6fbff] to-[#83a4d4] text-[#171212]">
      <section>
        <div className="mt-6 md:mt-14 md:mx-5 flex flex-col gap-7 items-center">
          <div className="w-[90%] md:w-[60%] mx-1 md:mx-4 md:border md:border-white rounded-md p-2 md:p-10">
            <h1>Memoization in React</h1>
            <p>
              Memoization - caching results based on inputs In React,
              memoization can be applied to functional components and selectors
            </p>
            <h1>Example of memoizing a Fibonacci sequence:</h1>
            <p>
              Fibonacci at position {n} is {memoizedResult}
            </p>
            <h1>Reselect</h1>
            <ul>
              <li>Memoization extended to Redux selectors</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
