import LearnerOnboardingProgressBarList from "./Styled-Components/LearnerOnboardingProgressBarList";
import LearnerOnboardingProgressBarListItem from "./Styled-Components/LearnerOnboardingProgressBarListItem";
import { GiFinishLine, GiCheckeredFlag } from "react-icons/gi";
import { FaFlagCheckered } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";

export default function LearnerOnboardingProgressBar({
  stepNumber,
  totalSteps,
}) {
  // Don't forget the avatar!

  const mySteps = [];

  for (let i = 1; i <= totalSteps; i++) {
    if (i === Number(stepNumber)) {
      mySteps.push(
        <>
          <LearnerOnboardingProgressBarListItem>
            {/* Avatar goes here */}
            <img src="/avatars/caterpillar.svg" />
          </LearnerOnboardingProgressBarListItem>
          <LearnerOnboardingProgressBarListItem>
            <TiArrowRightThick size="5rem" />
          </LearnerOnboardingProgressBarListItem>
        </>
      );
    } else if (i === Number(totalSteps)) {
      mySteps.push(
        <LearnerOnboardingProgressBarListItem>
          {/* <GiFinishLine size="5rem" /> */}
          {/* <GiCheckeredFlag size="5rem" /> */}
          <FaFlagCheckered size="5rem" />
        </LearnerOnboardingProgressBarListItem>
      );
    } else {
      mySteps.push(
        <>
          <LearnerOnboardingProgressBarListItem />
          <LearnerOnboardingProgressBarListItem>
            <TiArrowRightThick size="5rem" />
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
