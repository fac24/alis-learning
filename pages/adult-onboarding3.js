import AdultsBack from "../components/AdultsBack";
import AdultsNext from "../components/AdultsNext";
import AdultText from "../components/Styled-Components/AdultText";
import AdultProgress from "../components/AdultProgress";
import StyledForm from "../components/Styled-Components/AdultForm";
import styled from "styled-components";
import AdultLayout from "../components/AdultLayout";

export default function Adult({ setLearnerAge }) {
  const getAge = (e) => {
    e.preventDefault();
    // picking up the age from the input and saving it to local storage via out custom hook
    setLearnerAge(e.target.age.value);
  };

  return (
    <>
      <AdultLayout>
        <AdultProgress completed={55} />
        <AdultText>How old is the learner?</AdultText>
        <StyledForm onSubmit={getAge}>
          <label>
            <StyledInput
              type="number"
              name="age"
              min="1"
              max="18"
            ></StyledInput>
            years
          </label>
          <AdultsNext page={3} />
        </StyledForm>
        <AdultsBack page={3} />
      </AdultLayout>
    </>
  );
}

const StyledInput = styled.input`
  box-shadow: inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  font-size: 1.5rem;
  padding: 2rem 1rem;
  margin: 2rem 1rem 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
  text-align: center;
`;
