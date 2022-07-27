import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";
import styled from "styled-components";
import LearnerFontSettingSelectionButton from "../../components/Styled-Components/LearnerFontSettingSelectionButton";
import LearnerFontSettingSelectionContainer from "../../components/Styled-Components/LearnerFontSettingSelectionContainer";
import { useEffect } from "react";

export default function LearnerFontSizesSelection({
  fontSize,
  setFontSize,
  background,
  avatarNameInLocalStorage,
}) {
  function updateFontSize(newSize) {
    setFontSize(newSize);
  }
  let html = (
    <>
      <LearnerFontSettingSelectionContainer>
        <LearnerFontSettingSelectionButton
          onClick={() => updateFontSize("small")}
          className={fontSize === "small" ? "selected" : null}
        >
          <LearnerFontSizeSmall>cat on the mat</LearnerFontSizeSmall>
        </LearnerFontSettingSelectionButton>
        <LearnerFontSettingSelectionButton
          onClick={() => updateFontSize("medium")}
          className={fontSize === "medium" ? "selected" : null}
        >
          <LearnerFontSizeMedium>cat on the mat</LearnerFontSizeMedium>
        </LearnerFontSettingSelectionButton>
        <LearnerFontSettingSelectionButton
          onClick={() => updateFontSize("large")}
          className={fontSize === "large" ? "selected" : null}
        >
          <LearnerFontSizeLarge>cat on the mat</LearnerFontSizeLarge>
        </LearnerFontSettingSelectionButton>
      </LearnerFontSettingSelectionContainer>
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

//
// Use absolute (px) sizes so these don't change when the preference is changed!

const LearnerFontSizeSmall = styled.span`
  font-size: 36px;
`;

const LearnerFontSizeMedium = styled.span`
  font-size: 45px;
`;

const LearnerFontSizeLarge = styled.span`
  font-size: 54px;
`;
