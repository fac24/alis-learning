import AdultsBack from "../components/AdultsBack";
import AdultsNext from "../components/AdultsNext";
import AdultText from "../components/Styled-Components/AdultText";
import AdultProgress from "../components/AdultProgress";
import AdultForm from "../components/Styled-Components/AdultForm";
import styled from "styled-components";

export default function Adult() {
  const getGoal = (e) => {
    e.preventDefault();
    // picking up the age.
    // console.log(e.target.age.value);
    let learnersGoal = e.target.time.value;
    console.log(learnersGoal);
    // here we will handle saving the users age to local storage.
  };

  return (
    <>
      <AdultProgress completed={80} />
      <AdultText>Choose a daily goal for the learner.</AdultText>
      <AdultForm onSubmit={getGoal}>
        <label>
          <StyledSelect type="select" name="time">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </StyledSelect>
          minutes
        </label>
        <AdultsNext page={4} />
      </AdultForm>
      <AdultsBack page={4} />
    </>
  );
}

const StyledSelect = styled.select`
  padding: 10px 5px;
  margin: 5px;
  border: 2px solid grey;
  border-radius: 5px;
  text-align: center;
`;
