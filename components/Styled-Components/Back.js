import styled from "styled-components";
const Back = styled.a`
  position: absolute;
  bottom: 0rem;
  width: 12rem;
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  color: black;
  font-size: 16px;
  border-radius: 20px;
  border: none;
  background-color: white;
  margin: 2rem;
  cursor: pointer;

  &:hover {
    transform: translateY(0.125rem);
  }
`;

export default Back;
