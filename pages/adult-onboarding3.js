import AdultsBack from "../components/AdultsBack";
import AdultsNext from "../components/AdultsNext";
import AdultText from "../components/Styled-Components/AdultText";
import AdultProgress from "../components/AdultProgress";
import StyledForm from "../components/Styled-Components/AdultForm";
import styled from "styled-components";
import AdultLayout from "../components/AdultLayout";
import AdultInput from "../components/Styled-Components/AdultInput";

export default function Adult({ learnerAge, setLearnerAge }) {
  return (
    <>
      <AdultLayout>
        <AdultProgress completed={55} />
        <AdultText>How old is the learner?</AdultText>
        <StyledForm onSubmit={(e) => e.preventDefault()}>
          <label>
            <AdultInput
              type="number"
              name="age"
              min="1"
              max="18"
              onInput={(e) => setLearnerAge(Number(e.target.value))}
              value={learnerAge}
            ></AdultInput>
            years
          </label>
          <AdultsNext page={3} />
        </StyledForm>
        <AdultsBack page={3} />
      </AdultLayout>
    </>
  );
}
