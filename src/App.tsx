import React from "react";
import "./App.css";
import styled from "styled-components";
import Notes from "./Components/Notes";

function App() {
  const list = [
    {
      title: "React",
      url: "...",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "...",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  return (
    <div className="flex flex-col">
      <Header>
        <div>
          <div className="title">Hacker Stories</div>
          <div className="subtitle">My React notes</div>
        </div>
        <ul>
          <li>About Me</li>
        </ul>
      </Header>
      <main>
        <div className="textbook-code">
          <h1 className="">My Hacker Stories</h1>
          <label htmlFor="search">Search: </label>
          <input id="search" type="text" className="mt-2" />
          {List()}
        </div>

        <Notes />
      </main>
    </div>
  );

  function List() {
    return (
      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;

const Header = styled.div`
  /* position: absolute; */
  font-size: 1.5rem;
  margin: 0;
  text-transform: uppercase;
  /* top: 0; */
  /* left: 0; */
  height: 4rem;
  width: 100%;
  background: rgb(250, 250, 230);
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid green;

  .title {
    padding-left: 20px;
  }
  ul li {
    list-style: none outside none;
    display: inline-block;
    width: auto;
    padding: 0 25px;
  }
`;
