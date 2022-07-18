import styled from "styled-components";
import AdultsBack from "../components/AdultsBack";
import AdultsNext from "../components/AdultsNext";
import AdultText from "../components/Styled-Components/AdultText";

export default function Adult() {
  return (
    // crab claws as a parent container
    // sending it the page it is coming from for back / next functionality
    // if its the first page we will send different text to the button
    // will accept a boolean of true.

    // &apos; is html code for apostrophe (not to break depoly)
    <>
      <Title>Welcome!</Title>
      <AdultText>Let&apos;s set up a profile for the learner.</AdultText>
      <AdultsNext page={1} firstPage={true} />
      <AdultsBack page={1} />
    </>
  );
}

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
`;
