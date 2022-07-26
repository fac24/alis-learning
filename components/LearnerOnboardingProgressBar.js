import LearnerOnboardingProgressBarList from "./Styled-Components/LearnerOnboardingProgressBarList";
import LearnerOnboardingProgressBarListItem from "./Styled-Components/LearnerOnboardingProgressBarListItem";
import LearnerOnboardingProgressBarListItemFinal from "./Styled-Components/LearnerOnboardingProgressBarListItemFinal";
import { GiFinishLine, GiCheckeredFlag } from "react-icons/gi";
import { FaFlagCheckered } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";
import Image from "next/image";
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
              // className="circle_avatar"
              src={avatars[avatarNameInLocalStorage] || "/avatars/mystery.svg"}
              alt="avatar"
              width="100"
              height="100"
            />
            {/* {i.toString()} */}
          </LearnerOnboardingProgressBarListItem>
          <LearnerOnboardingProgressBarListItem
            key={(totalSteps + i + 1).toString()}
          >
            {/* {(totalSteps + i + 1).toString()} */}
            <TiArrowRightThick size="5rem" />
          </LearnerOnboardingProgressBarListItem>
        </>
      );
    } else if (i === stepNumber && i === totalSteps) {
      mySteps.push(
        <>
          <LearnerOnboardingProgressBarListItemFinal key={i.toString()}>
            {/* {i.toString()} */}
            <GiFinishLine size="8rem" />
            <Image
              src={avatars[avatarNameInLocalStorage] || "/avatars/mystery.svg"}
              alt="avatar"
              width="100"
              height="100"
            />
          </LearnerOnboardingProgressBarListItemFinal>
        </>
      );
    } else if (i === totalSteps) {
      mySteps.push(
        <LearnerOnboardingProgressBarListItemFinal key={i.toString()}>
          {/* {i.toString()} */}
          <GiFinishLine size="8rem" />
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
