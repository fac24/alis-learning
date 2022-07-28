import styled from "styled-components";

const ChildNext = styled.a`
  background: linear-gradient(hsl(25, 100%, 62%), hsl(25, 100%, 51%));
  border-radius: 1rem;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;
  display: block;
  margin: 3rem auto;
  padding: 1rem 6rem;
  font-size: 2.25rem;
  font-weight: bold;
  letter-spacing: 0.25rem;
  text-decoration: none;
  text-shadow: 0px 2px 4px black;
  width: fit-content;

  &:active {
    transform: translateY(0.2rem);
  }
`;

export default ChildNext;
