import AdultsBack from "../components/AdultsBack";
import AdultsNext from "../components/AdultsNext";
import AdultText from "../components/Styled-Components/AdultText";
import AdultBackButton from "../components/Styled-Components/AdultBackButton";
import AdultProgress from "../components/AdultProgress";
import AdultLayout from "../components/AdultLayout";

import styled from "styled-components";

export default function Adult() {
  return (
    <>
      <AdultLayout>
        <AdultProgress completed={5} />
        <AdultText>
          A fun and educational dyslexic reading platform for kids.
        </AdultText>
        <AdultsNext page={1} firstPage={true} />
        {/* This button is just a placeholder for now - let's check if Kaher want it*/}
        <InfoButton>How can Alis Learning help with dyslexia?</InfoButton>
        <AdultsBack page={1} />
      </AdultLayout>
    </>
  );
}

const InfoButton = styled(AdultBackButton)`
  margin: 6rem auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;
