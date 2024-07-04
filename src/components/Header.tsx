import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function Header() {
  const [show, setShow] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const onClose = () => setShow(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      // console.log(event.target);
      // console.log(
      //   modalRef.current && !modalRef.current.contains(event.target as Node)
      // );

      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [modalRef, onClose]);

  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <div className="header text-3xl md:text-4xl pl-4 pb-0">
            Hacker Stories
          </div>

          <div className="subheader pl-[14px] text-[10px] text-gray-400">
            My React notes
          </div>
        </Link>
      </div>
      <ul className="mr-6">
        <li>
          <div className="dropdown" ref={modalRef}>
            <button className="dropdown-button" onClick={() => setShow(!show)}>
              &#9776;
              <i className="fa fa-caret-down"></i>
            </button>
            <div
              className={`dropdown-links ${
                show ? "dropdown-show" : "dropdown-hide"
              }`}
            >
              <span id="close-button">
                <button onClick={() => setShow(false)}>✖</button>
              </span>
              <Link to="/react-notes/node-notes">Node Notes</Link>
              <Link to="/react-notes/about">About</Link>
              <Link to="/react-notes/code-examples">Code Examples</Link>
            </div>
          </div>
        </li>
      </ul>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  /* position: absolute; */
  font-size: 1.5rem;
  margin: 0;
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
