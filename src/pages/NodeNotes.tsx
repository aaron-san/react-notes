import React from "react";

function NodeNotes() {
  return (
    <div>
      <div className="flex flex-col items-center mx-[20%] my-5">
        <h1>Node</h1>
        <p>
          Node.js is a cross-platform runtime environment and library that is
          built on Chrome's JavaScript runtime and is used for building fast and
          scalable network applications, specifically, JavaScript applications
          outide the browser. It is often used to create networking and
          server-side applications, but primarly used to run real-time server
          applications. Node.js uses an event-driven, non-blocking I/O model
          that makes it lightweight and efficient.
        </p>
        <h2>Components of Node.js</h2>
        <ul>
          <li>Buffer</li>
          <li>Modules</li>
          <li>Debugger</li>
          <li>Console</li>
          <li>Cluster</li>
          <li>Add-ons</li>
          <li>Callback</li>
          <li>Crypto</li>
          <li>Error Handling</li>
          <li>Net</li>
          <li>Global</li>
          <li>Domain</li>
          <li>DNS</li>
          <li>Streaming</li>
        </ul>
      </div>
    </div>
  );
}

export default NodeNotes;
