import AdultsBack from "../components/AdultsBack";
import AdultsNext from "../components/AdultsNext";
import AdultText from "../components/Styled-Components/AdultText";
import AdultProgress from "../components/AdultProgress";
import StyledForm from "../components/Styled-Components/AdultForm";
import styled from "styled-components";

export default function Adult() {
  const getAge = (e) => {
    e.preventDefault();
    // picking up the age.
    // console.log(e.target.age.value);
    let learnersAge = e.target.age.value;
    console.log(learnersAge);
    // here we will handle saving the users age to local storage.
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
