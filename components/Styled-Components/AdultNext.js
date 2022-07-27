import styled from "styled-components";

// The absolute and and top/left 50% move the buttons top left corner to the center of the page
// minus some margin on top and left to bring the whole thing back to the center
// If you want to adjust the position change the 'margin-top' and the 'margin-left' accordingly
// ask maria if you are confused (:

const AdultNext = styled.button`
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
  border-radius: 20px;
  border: none;
  background-color: #4316a3;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    transform: translateY(0.125rem);
  }
`;

export default AdultNext;
