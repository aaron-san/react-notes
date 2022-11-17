import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Notes from "../components/Notes";

const Home = () => {
  const stories: {
    objectID: number;
    url: string;
    title: string;
    author: string;
    num_comments: number;
    points: number;
  }[] = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="flex flex-col">
      <StyledHeader>
        <div>
          <Link to="/react-notes" className="pl-4">
            Hacker Stories
          </Link>
          <div className="pl-4 text-sm text-gray-400">My React notes</div>
        </div>
        <ul className="mr-6 text-xl text-gray-500">
          <li>About</li>
        </ul>
      </StyledHeader>
      <main className="m-6">
        <div className="w-[80%] mx-2 md:w-[39%] md:mx-8">
          <h1 className="">My Hacker Stories</h1>
          <Search search={searchTerm} onSearch={handleSearch} />
          <hr />

          <List list={searchedStories} />
        </div>

        <Notes />
      </main>
    </div>
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

export default Home;

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
