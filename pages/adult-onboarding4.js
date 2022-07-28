import AdultsBack from "../components/AdultsBack";
import AdultsNext from "../components/AdultsNext";
import AdultText from "../components/Styled-Components/AdultText";
import AdultProgress from "../components/AdultProgress";
import AdultForm from "../components/Styled-Components/AdultForm";
import styled from "styled-components";
import AdultLayout from "../components/AdultLayout";
import AdultInput from "../components/Styled-Components/AdultInput";

export default function Adult({ learnerGoal, setLearnerGoal }) {
  // const goalOptions = [5, 10, 15];

  return (
    <>
      <AdultLayout>
        <AdultProgress completed={80} />
        <AdultText>Choose a daily goal for the learner.</AdultText>
        <AdultForm onSubmit={(e) => e.preventDefault()}>
          <label>
            <StyledSelect
              type="select"
              name="time"
              value={learnerGoal}
              onInput={(e) => setLearnerGoal(e.target.value)}
            >
              {/* {goalOptions.map((goal) => (
                <option value={goal}>{goal}</option>
              ))} */}
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </StyledSelect>
            minutes
          </label>
          <AdultsNext page={4} />
        </AdultForm>
        <AdultsBack page={4} />
      </AdultLayout>
    </>
  );
}

const StyledSelect = styled(AdultInput).attrs({ as: "select" })`
  padding: 2rem 1.75rem;
`;
