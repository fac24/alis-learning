import Link from "next/link";
import styled from "styled-components";
import AdultsBack from "../components/AdultsBack";
import AdultsNext from "../components/AdultsNext";
import AdultText from "../components/Styled-Components/AdultText";

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
      <AdultText>How old is the Learner?</AdultText>
      <form onSubmit={getAge}>
        <label>
          <input type="number" name="age" min="1" max="18"></input>
          years
        </label>
        <AdultsNext page={2} />
      </form>
      <AdultsBack page={2} />
    </>
  );
}
