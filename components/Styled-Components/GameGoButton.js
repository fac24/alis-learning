import styled from "styled-components";

const GameGoButton = styled.button`
  align-items: center;
  background: linear-gradient(#11d600, #21a300);
  border-radius: 1rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 2.5rem;
  font-weight: bold;
  justify-content: center;
  letter-spacing: 2px;
  margin: 5rem auto;
  padding: 1rem 4rem;
  text-shadow: 0 0.15rem 0.15rem rgba(0, 0, 0, 0.5);
  // width: 16rem;

  &:active {
    transform: translateY(0.125rem);
  }
`;

export default GameGoButton;
