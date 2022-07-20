import styled from "styled-components";

const ChildNext = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10rem;
  width: 13rem;
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  color: white;
  font-size: 15px;
  font-weight: 700;
  border-radius: 20px;
  border: none;
  background-color: orange;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    transform: translateY(0.125rem);
  }
`;

export default ChildNext;
