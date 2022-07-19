import AdultsBack from "../components/AdultsBack";
import AdultsNext from "../components/AdultsNext";
import AdultText from "../components/Styled-Components/AdultText";
import styled from "styled-components";

export default function Adult() {
  return (
    // crab claws as a parent container
    // sending it the page it is coming from for back / next functionality
    // if its the first page we will send different text to the button
    // will accept a boolean of true.
    <>
      <AdultText>
        A fun and educational dyslexic reading platform for kids.
      </AdultText>
      <AdultsNext page={1} firstPage={true} />
      <AdultsBack page={1} />
      {/* This button is just a placeholder for now - let's check if Kaher want it*/}
      <InfoButton>How can Alis Learning help with dyslexia?</InfoButton>
    </>
  );
}

const InfoButton = styled.button`
display: flex;
text-align: center;
justify-content: center;
margin-left: auto;
margin-right: auto;
border-radius: 0.313rem;
padding: 1%;
border: 0.2rem solid black;
margin-top: 6rem;

&:hover{
  transform: translateY(0.125rem);
`;
