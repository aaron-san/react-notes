import React, { useEffect } from "react";
// import "prismjs/themes/prism.css";
// import "prismjs/components/prism-tsx";
// import Prism from "prismjs";

interface ICode {
  code: string;
  language: string;
}

// const CodeBlock = ({ code, language }: ICode) => {
//   useEffect(() => {
//     Prism.highlightAll();
//   }, [code, language]);
//   return (
//     <div className="w-[90%]">
//       <pre>
//         <code className={`language-${language} w-[95%]`}>{code}</code>
//       </pre>
//     </div>
//   );
// };

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeBlock = ({ code, language }: ICode) => (
  <SyntaxHighlighter language={language} style={dark}>
    {code}
  </SyntaxHighlighter>
);
