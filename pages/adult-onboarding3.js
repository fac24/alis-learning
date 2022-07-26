import AdultsBack from "../components/AdultsBack";
import AdultsNext from "../components/AdultsNext";
import AdultText from "../components/Styled-Components/AdultText";
import AdultProgress from "../components/AdultProgress";
import StyledForm from "../components/Styled-Components/AdultForm";
import styled from "styled-components";

export default function Adult({ setLearnerAge }) {
  const getAge = (e) => {
    e.preventDefault();
    // picking up the age from the input and saving it to local storage via out custom hook
    setLearnerAge(e.target.age.value);
  };

  return (
    <>
      <AdultProgress completed={55} />
      <AdultText>How old is the learner?</AdultText>
      <StyledForm onSubmit={getAge}>
        <label>
          <StyledInput type="number" name="age" min="1" max="18"></StyledInput>
          years
        </label>
        <AdultsNext page={3} />
      </StyledForm>
      <AdultsBack page={3} />
    </>
  );
}

const StyledInput = styled.input`
  padding: 10px 5px;
  margin: 5px;
  border: 2px solid grey;
  border-radius: 5px;
  text-align: center;
`;
