import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";
//import Caterpillar from "../../public/avatars/caterpillar.svg";

export default function LearnerAvatarSelection() {
  return (
    <LearnerOnboardingLayout
      ttsTitle="Pick your avatar"
      stepNumber={0}
      nextStep="name"
      // we need to change the previous step!
      previousStep=""
    >
      Avatar selection code goes here
    </LearnerOnboardingLayout>
  );
}
