import React from "react";
import styled from "styled-components";
import Links from "./Links";

function Notes() {
  return (
    <div className="mt-14 flex">
      <Card>
        <h2>Notes</h2>
        <hr />

        <p>Command Line</p>
        <code>node --version</code>
        <code>npm --version</code>
        <code>npx create-react-app hacker-stories</code>
        <code>cd hacker-stories</code>
        <code>code . //Open in VS Code</code>
        <code>npm start</code>
        <code>npm test</code>
        <code>npm run build</code>

        <h2>To Do</h2>
        <hr />
        <p>
          Learn UI/UX design, user interaction, and user experience tips on
          YouTube{" "}
        </p>
      </Card>
      <Card>
        <Links />
      </Card>
    </div>
  );
}

export default Notes;

const Card = styled.div`
  margin: 20px;
  width: 40vw;
`;
