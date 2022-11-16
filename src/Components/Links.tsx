import React from "react";

function Links() {
  const links = [
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
          JavaScript applications
        </li>
      </ul>
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

      <ul className="flex flex-wrap">
        {links.map((item) => {
          return (
            <li key={item.href} className="ml-3 my-2 list-none">
              <a
                href={item.href}
                className="px-3 py-1 text-sm text-red-500 border-2 rounded-2xl shadow-2 bg-gradient-to-r from-slate-100 to-slate-100"
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

export default Links;
