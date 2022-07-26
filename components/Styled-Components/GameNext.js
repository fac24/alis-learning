import styled from "styled-components";

const GameNext = styled.button`
  display: block;
  margin: 8rem auto 0 auto;
  width: 16rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  color: white;
  font-size: 30px;
  font-weight: 700;
  border-radius: 20px;
  border: none;
  background-color: darkorange;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    transform: translateY(0.125rem);
  }
`;

export default GameNext;
