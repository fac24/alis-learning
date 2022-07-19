import AdultsBack from "../components/AdultsBack";
import AdultsNext from "../components/AdultsNext";
import AdultText from "../components/Styled-Components/AdultText";

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
      <AdultText>Choose a daily goal for the learner.</AdultText>
      <form onSubmit={getGoal}>
        <label>
          <select type="select" name="time">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          minutes
        </label>
        <AdultsNext page={4} />
      </form>
      <AdultsBack page={4} />
    </>
  );
}
