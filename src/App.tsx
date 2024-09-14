import React, { useState } from "react";
import "./App.css";
// import "./prism.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
// import Notes from "./components/Notes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import NodeNotes from "./pages/NodeNotes";

import { CodeExamples } from "./pages/CodeExamples";
import CampingNotes from "./pages/CampingNotes";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-notes/about" element={<About />} />
        <Route path="/react-notes/node-notes" element={<NodeNotes />} />
        <Route path="/react-notes/code-examples" element={<CodeExamples />} />
        <Route path="/react-notes/code-examples" element={<CampingNotes />} />
        {/* <Route exact path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
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

//Desctructure the props in the function signature
const Search = ({ search, onSearch }: any): JSX.Element => {
  // Destructuring
  // const { search, onSearch } = props;
  return <div></div>;
};

export default App;
