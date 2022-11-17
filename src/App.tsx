import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Notes from "./components/Notes";
import Home from "./pages/Home";
// import Search from "./components/Search";
// import { JsxElement } from "typescript";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-notes" element={<Home />} />
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route exact path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

// ListProps {
//   objectID: string;
//   url: string;
//   title: string;
//   author: string;
//   num_comments: number;
//   points: number;
// }

const Search = (props: any): JSX.Element => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        className="mt-2 rounded-sm"
        value={props.search}
        onChange={props.onSearch}
      />
    </div>
  );
};

const List = (props: any) => {
  return (
    <ul>
      {props.list.map((item: any) => {
        return <Item key={item.objectID} item={item} />;
      })}
    </ul>
  );
};

const Item = (props: any) => {
  return (
    <li key={props.item.objectID}>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  );
};

export default App;

const StyledHeader = styled.div`
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

  ul li {
    display: inline-block;
  }
`;
