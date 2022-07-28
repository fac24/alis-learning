import styled from "styled-components";
import LearnerNextButton from "./LearnerNextButton";

const AdultNext = styled(LearnerNextButton).attrs({ tabIndex: 0 })`
  background: linear-gradient(#4316a3, #3d217a);
  font-size: 1.25rem;
  // font-weight: normal;
  letter-spacing: 0.15rem;
  padding: 1.25rem 4.5rem;
`;

/*
  display: flex;
  text-align: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10rem;
  // position: absolute;
  bottom: 0rem;
  width: 12rem;
  padding: 1.5rem;
  box-shadow: 5px 10px 8px #888888;
  color: white;
  font-size: 15px;
  font-family: rial, Helvetica, sans-serif;
  border-radius: 20px;
  border: none;
  background-color: #4316a3;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    transform: translateY(0.125rem);
  }
*/

export default AdultNext;
