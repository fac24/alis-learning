import LearnerOnboardingProgressBarList from "./Styled-Components/LearnerOnboardingProgressBarList";
import LearnerOnboardingProgressBarListItem from "./Styled-Components/LearnerOnboardingProgressBarListItem";
import LearnerOnboardingProgressBarListItemFinal from "./Styled-Components/LearnerOnboardingProgressBarListItemFinal";
import { GiFinishLine, GiCheckeredFlag } from "react-icons/gi";
import { FaFlagCheckered, FaCheck } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import avatars from "../data/avatars.js";

export default function LearnerOnboardingProgressBar({
  stepNumber,
  totalSteps,
  avatarNameInLocalStorage,
}) {
  const mySteps = [];

  // We want to make a list for the total number of steps in the progress indicator.
  // So make a loop that counts from 0 to the total number of steps.
  for (let i = 0; i <= totalSteps; i++) {
    // If the loop counter is equal to the step that the user is on...
    if (i === stepNumber && i !== totalSteps) {
      // Then show their avatar in the
      mySteps.push(
        <>
          <LearnerOnboardingProgressBarListItem key={i.toString()}>
            <Image
              src={avatars[avatarNameInLocalStorage] || "/avatars/mystery.svg"}
              alt="avatar"
              width="100"
              height="100"
              layout="fixed"
            />
            {/* {i.toString()} */}
          </LearnerOnboardingProgressBarListItem>
          <LearnerOnboardingProgressBarListItem
            key={(totalSteps + i + 1).toString()}
          >
            {/* {(totalSteps + i + 1).toString()} */}
            <TiArrowRightThick size="80px" />
          </LearnerOnboardingProgressBarListItem>
        </>
      );
    } else if (i < stepNumber && i !== totalSteps) {
      // The show the tick in the completed steps
      mySteps.push(
        <>
          <LearnerOnboardingProgressBarListItem
            style={{
              backgroundColor: "lightGreen",
            }}
            key={i.toString()}
          >
            <FaCheck size="60px" />
            {/* {i.toString()} */}
          </LearnerOnboardingProgressBarListItem>
          <LearnerOnboardingProgressBarListItem
            key={(totalSteps + i + 1).toString()}
          >
            {/* {(totalSteps + i + 1).toString()} */}
            <TiArrowRightThick size="80px" />
          </LearnerOnboardingProgressBarListItem>
        </>
      );
    } else if (i === stepNumber && i === totalSteps) {
      mySteps.push(
        <>
          <LearnerOnboardingProgressBarListItemFinal key={i.toString()}>
            {/* {i.toString()} */}
            <GiFinishLine size="120px" />
            <StyledImage
              src={avatars[avatarNameInLocalStorage] || "/avatars/mystery.svg"}
              alt="avatar"
              width="100"
              height="100"
              layout="fixed"
            />
          </LearnerOnboardingProgressBarListItemFinal>
        </>
      );
    } else if (i === totalSteps) {
      mySteps.push(
        <LearnerOnboardingProgressBarListItemFinal key={i.toString()}>
          {/* {i.toString()} */}
          <GiFinishLine size="120px" />
          {/* <GiCheckeredFlag size="5rem" /> */}
          {/* <FaFlagCheckered size="5rem" /> */}
        </LearnerOnboardingProgressBarListItemFinal>
      );
    } else {
      mySteps.push(
        <>
          <LearnerOnboardingProgressBarListItem key={i.toString()}>
            {/* {i.toString()} */}
          </LearnerOnboardingProgressBarListItem>
          <LearnerOnboardingProgressBarListItem
            key={(totalSteps + i + 1).toString()}
          >
            {/* {(totalSteps + i + 1).toString()} */}
            <TiArrowRightThick size="80px" />
          </LearnerOnboardingProgressBarListItem>
        </>
      );
    }
  }

  return (
    <LearnerOnboardingProgressBarList>
      {mySteps}
    </LearnerOnboardingProgressBarList>
  );
}

const CHEER_FOR_FINSISH_LINE = "2s";

const WinningBounce = keyframes`
0%   { transform: scale(1,1)    translateY(0); }
10%  { transform: scale(1.1,.9) translateY(0); }
30%  { transform: scale(.9,1.1) translateY(-100px); }
50%  { transform: scale(1,1)    translateY(0); }
100% { transform: scale(1,1)    translateY(0); }
`;

const StyledImage = styled.img`
  animation-name: ${WinningBounce};
  animation-duration: ${CHEER_FOR_FINSISH_LINE};
  animation-timing-function: ease;
`;
