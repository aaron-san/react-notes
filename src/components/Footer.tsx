import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function Footer() {
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
    <StyledFooter>
      <div className="subfooter pl-[14px] text-[16px]">
        &copy; {new Date().getFullYear()}
      </div>

      <div className="text-[14px] flex gap-4 underline mr-4">
        <Link to="/react-notes/node-notes">Node Notes</Link>
        <Link to="/react-notes/about">About</Link>
        <Link to="/react-notes/code-examples">Code Examples</Link>
      </div>
    </StyledFooter>
  );
}


const StyledFooter = styled.div`
  /* position: absolute; */
  font-size: 1.5rem;
  margin: 0;
  /* top: 0; */
  /* left: 0; */
  height: 4rem;
  width: 100%;
  background: rgb(109, 109, 99);
  color: whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 4px solid whitesmoke;

  ul li {
    display: inline-block;
  }
`;
