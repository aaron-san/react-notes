import React from "react";

export function Links() {
  const links = [
    {
      href: "https://codesandbox.io/p/sandbox/github/the-road-to-learn-react/hacker-stories/tree/2021%2FPaginated-Fetch/?file=%2Fsrc%2FApp.js%3A283%2C5-306%2C12",
      text: "Source Code Snapshot",
    },
    {
      href: "https://www.robinwieruch.de/git-essential-commands",
      text: "Git Essential Commands",
    },
    {
      href: "https://www.robinwieruch.de/reasons-why-i-moved-from-angular-to-react",
      text: "Why I moved from Angular to React",
    },
    {
      href: "https://www.robinwieruch.de/javascript-fundamentals-react-requirements",
      text: "JavaScript needed for React",
    },
    {
      href: "https://www.robinwieruch.de/what-is-an-api-javascript",
      text: "What is an API in Javascript?",
    },

    {
      href: "https://www.robinwieruch.de/npm-crash-course",
      text: "NPM Crash Course",
    },
    {
      href: "https://www.robinwieruch.de/react-event-handler",
      text: "React Events & Handlers",
    },
    {
      href: "https://www.robinwieruch.de/pass-props-to-component",
      text: "Passing Props to Components",
    },
    {
      href: "https://mzl.la/3ncC7WI",
      text: "JavaScript Restructuring",
    },
    {
      href: "https://mzl.la/30KbXTC",
      text: "JavaScript's destructuring assignment",
    },
    {
      href: "https://mzl.la/3jetIkn",
      text: "JavaScript's spread operator",
    },
    {
      href: "https://mzl.la/3GeJbef",
      text: "JavaScript's rest parameters",
    },
    {
      href: "https://www.robinwieruch.de/react-add-item-to-list",
      text: "React - Add item to list",
    },
    {
      href: "https://www.robinwieruch.de/react-update-item-in-list",
      text: "React - Update item in list",
    },
    {
      href: "https://www.robinwieruch.de/react-remove-item-from-list",
      text: "React - Remove item from list",
    },
    {
      href: "https://www.robinwieruch.de/react-computed-properties",
      text: "React computed properties",
    },

    {
      href: "https://mzl.la/3aTGuQz",
      text: "JavaScript Promises",
    },
    {
      href: "https://www.robinwieruch.de/javascript-fake-api",
      text: "Faking a remote API with JavaScript",
    },
    {
      href: "https://www.robinwieruch.de/react-mock-data",
      text: "Using Mock data in React",
    },
    {
      href: "https://news.ycombinator.com",
      text: "Hacker News",
    },
    {
      href: "https://hn.algolia.com/api",
      text: "Hacker News API",
    },
    {
      href: "https://bit.ly/3ncFfSs",
      text: "Headless Browser Environment",
    },
    {
      href: "https://mzl.la/3AWyWaw",
      text: "Async/Await in JavaScript",
    },
    {
      href: "https://bit.ly/3GeJGF9",
      text: "Sass (nesting, etc.)",
    },
    {
      href: "https://mzl.la/3vvc2FO",
      text: "JavaScript Classes",
    },
    {
      href: "https://www.robinwieruch.de/react-hooks-migration",
      text: "Refactor class components into function components",
    },
    {
      href: "https://bit.ly/3FXUibf",
      text: "Class components in depth",
    },
    {
      href: "https://bit.ly/3E16SEz",
      text: "Flaticon SVGs",
    },
    {
      href: "https://www.robinwieruch.de/react-svg-patterns",
      text: "React SVG Background Patterns",
    },
    {
      href: "https://www.robinwieruch.de/react-memo",
      text: "React memo",
    },
    {
      href: "https://www.robinwieruch.de/react-usecallback-hook",
      text: "React useCallback",
    },
    {
      href: "https://www.robinwieruch.de/react-usememo-hook",
      text: "React useMemo",
    },
    {
      href: "https://bit.ly/3phdf2H",
      text: "React + TypeScript Cheatsheet",
    },
  ];

  return (
    <div>
      <h1>Links</h1>
      <hr />
      <h3>Robin Wieruch</h3>
      <ul>
        <li>
          German software and web developer who regularly writes articles on
          website
        </li>
        <li>
          Self-employed developer who helps companies in creating their MVPs,
          conducting workshops and code audits/reviews, and creates large-scale
          JavaScript applications.
        </li>
      </ul>
      <div className="flex justify-around p-1 md:p-2 underline border border-white rounded-md my-2 bg-white bg-opacity-20">
        <a
          className="webpagelink"
          href="https://www.getrevue.co/profile/rwieruch"
        >
          Profile
        </a>
        <a className="webpagelink" href="https://twitter.com/rwieruch">
          Twitter
        </a>
        <a className="webpagelink" href="https://www.robinwieruch.de">
          Website
        </a>
        <a className="webpagelink" href="https://www.robinwieruch.de/about">
          About
        </a>
      </div>
      <ul className="flex flex-col md:flex-row md:flex-wrap">
        {links.map((item) => {
          return (
            <li key={item.href} className="ml-3 my-2 list-none">
              <a
                href={item.href}
                className="px-3 py-1 text-sm text-red-500 border-2 rounded-2xl shadow-2 bg-gradient-to-r from-slate-200 to-slate-100 whitespace-nowrap"
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
