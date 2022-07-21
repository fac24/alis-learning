import styled from "styled-components";

const ChildNext = styled.button`
  background: linear-gradient(hsl(25, 100%, 62%), hsl(25, 100%, 51%));
  border-radius: 1rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  color: white;
  cursor: pointer;
  margin: 0 auto;
  padding: 1rem 6rem;
  font-family: ComicNeue;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-shadow: 0px 2px 4px black;

  &:active {
    transform: translateY(0.2rem);
  }
`;

export default ChildNext;
