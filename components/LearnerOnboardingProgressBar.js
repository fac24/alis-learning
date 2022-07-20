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

  // We want to make a list for the total number of steps in the progress indicator.
  // So make a loop that counts from 0 to the total number of steps.
  for (let i = 1; i <= totalSteps; i++) {
    // If the loop counter is equal to the step that the user is on...
    if (i === stepNumber) {
      // Then show their avatar in the
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
    } else if (i === totalSteps) {
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
