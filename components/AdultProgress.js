import styled from "styled-components";

export default function AdultProgress({ completed }) {
  return (
    <Center>
      <StyledProgress
        id="adultprogress"
        max="105"
        value={completed}
      ></StyledProgress>
    </Center>
  );
}

const StyledProgress = styled.progress`
  width: 80%;
  text-align: center;
  height: 1.5rem;

  -webkit-appearance: none;
  -moz-appearance: none;

  ::-webkit-progress-value {
    background-color: green;
    border-radius: 20px;
  }
  ::-webkit-progress-bar {
    border-radius: 20px;
    background-color: #d3d3d3;
  }

  ::-moz-progress-value {
    background-color: green;
    border-radius: 20px;
  }
  ::-moz-progress-bar {
    background-color: #d3d3d3;
    border-radius: 20px;
  }
`;

// to center the progress bar in needs to have a parent block element (aka a div) and that is given text align center to the child elements (aka progress bar) to be centered
const Center = styled.div`
  text-align: center;
`;
