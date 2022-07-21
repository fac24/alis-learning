import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";
import Tts from "../../components/tts";
import { colours } from "../../data/colours.js";
import styled from "styled-components";
import { useEffect } from "react";

export default function LearnerBackgroudSelection({
  background,
  setBackground,
  avatarNameInLocalStorage,
}) {
  const updateColour = (e) => {
    setBackground(e.target.value);
  };

  useEffect(() => {
    document.body.style.backgroundColor = background;
  }, [background]);

  return (
    <LearnerOnboardingLayout
      ttsTitle="Click the colours to change the background."
      stepNumber={4}
      nextStep="onboarding-done"
      previousStep="font-size-selection"
      avatarNameInLocalStorage={avatarNameInLocalStorage}
    >
      <Grid>
        {colours.map((colour) => (
          <ColourButton
            style={{ backgroundColor: colour.hex }}
            value={colour.hex}
            onClick={updateColour}
          ></ColourButton>
        ))}
      </Grid>
      <Tts>What colour makes it easier to read?</Tts>
    </LearnerOnboardingLayout>
  );
}

const ColourButton = styled.button`
  height: 3rem;
  width: 3rem;
  margin: 2rem 1rem 0 1rem;
  cursor: pointer;
  border: 2px grey solid;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 5px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0 auto;
  width: 20rem;
`;
