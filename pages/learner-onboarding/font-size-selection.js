import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";
import { useState } from "react";
import styled from "styled-components";
import FontFlex from "../../components/Styled-Components/FontFlex";

export default function LearnerFontSizesSelection() {
  const [size, setSize] = useState("");

  function updateFontSize(e) {
    e.preventDefault();
    setSize(e.target.value);
    console.log(size);
    //We need to update the local storage here!
  }
  let html = (
    <>
      <FontFlex>
        <LearnerFontSizeSmall onClick={updateFontSize} value="small">
          cat on the mat
        </LearnerFontSizeSmall>
        <LearnerFontSizeMedium onClick={updateFontSize} value="medium">
          cat on the mat
        </LearnerFontSizeMedium>
        <LearnerFontSizeLarge onClick={updateFontSize} value="large">
          cat on the mat
        </LearnerFontSizeLarge>
      </FontFlex>
    </>
  );

  return (
    <>
      <LearnerOnboardingLayout
        ttsTitle="What is easier to read?"
        nextStep="background-selection"
        previousStep="font-selection"
        children={html}
      />
    </>
  );
}

const LearnerFontSizeSmall = styled.button`
  font-size: 1rem;
  margin-top: 10px;
  padding: 12px 18px;
  background-color: transparent;
  border: none;
`;

const LearnerFontSizeMedium = styled.button`
  font-size: 2rem;
  margin-top: 10px;
  padding: 12px 18px;
  background-color: transparent;
  border: none;
`;

const LearnerFontSizeLarge = styled.button`
  font-size: 3rem;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 12px 18px;
  background-color: transparent;
  border: none;
`;
