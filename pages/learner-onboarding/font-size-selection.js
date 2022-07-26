import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";
import styled from "styled-components";
import FontFlex from "../../components/Styled-Components/FontFlex";
import { useEffect } from "react";

export default function LearnerFontSizesSelection({
  fontSize,
  setFontSize,
  background,
  avatarNameInLocalStorage,
}) {
  function updateFontSize(e) {
    e.preventDefault();
    setFontSize(e.target.value);
    //console.log(fontSize);
  }
  let html = (
    <>
      <FontFlex>
        <LearnerFontSizeSmall
          onClick={updateFontSize}
          value="small"
          className="small"
        >
          cat on the mat
        </LearnerFontSizeSmall>
        <LearnerFontSizeMedium
          onClick={updateFontSize}
          value="medium"
          className="medium"
        >
          cat on the mat
        </LearnerFontSizeMedium>
        <LearnerFontSizeLarge
          onClick={updateFontSize}
          value="large"
          className="large"
        >
          cat on the mat
        </LearnerFontSizeLarge>
      </FontFlex>
    </>
  );

  return (
    <>
      <LearnerOnboardingLayout
        ttsTitle="What is easier to read?"
        stepNumber={3}
        nextStep="background-selection"
        previousStep="font-selection"
        children={html}
        avatarNameInLocalStorage={avatarNameInLocalStorage}
        background={background}
        fontSize={fontSize}
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
