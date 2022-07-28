import Link from "next/link";
// import styled from "styled-components";
import avatars from "../data/avatars";
// import Image from "next/image";
import styled, { keyframes } from "styled-components";
import LearnerBigCTAButton from "../components/Styled-Components/LearnerBigCTAButton";
import AdultBackButton from "../components/Styled-Components/AdultBackButton";
import Tts from "../components/Tts";

export default function Home({ onboarding, learnerName }) {
  return (
    <>
      <Grid>
        {Object.entries(avatars).map(([avatar_name, avatar_file], index) => (
          <Icon key={avatar_name}>
            <LandingImage
              src={avatar_file}
              alt={avatar_name + " avatar"}
              height={100}
              width={100}
            />
          </Icon>
        ))}
      </Grid>
      <LandingMessage>
        {onboarding
          ? `Hi ${learnerName}, welcome back!`
          : `Hi, it looks like this is your first visit.`}
      </LandingMessage>
      <Tts>Click the button to {onboarding ? "continue" : "get started"}</Tts>
      <Link
        href={
          onboarding ? "child-landing" : "learner-onboarding/avatar-selection"
        }
        passHref
      >
        <LearnerBigCTAButton id="get_started">
          {onboarding ? "Continue learning" : "Get started!"}
        </LearnerBigCTAButton>
      </Link>
      <Link href="adult-onboarding1" passHref>
        <AdultStartButton>I'm a parent or teacher</AdultStartButton>
      </Link>
    </>
  );
}

const LandingMessage = styled.h2`
  font-size: 2.25rem;
  font-weight: normal;
  margin: 6rem auto 3rem auto;
  max-width: fit-content;
`;

const AdultStartButton = styled(AdultBackButton)`
  margin: 12rem auto 3rem auto;
  padding-left: 4rem;
  padding-right: 4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  // // column-gap: 80%;
  // column-gap: 70%;
  column-gap: 40%;
  // margin-left: 10%;
  position: absolute;
  top: 5vw;
  left: 10vw;
  margin: 5%;
  // overflow-x: hidden;
  z-index: -1;

  @media only screen and (max-width: 600px) {
    column-gap: 25%;
    // row-gap: 20%;
    row-gap: 30%;
  }
`;

// const ROTATE_DURATION = "8s";

// const rotatingAvatar = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(359deg);
//   }
// `;

const Icon = styled.div`
  // margin: 2rem;
  margin: 0.9rem;
  width: 90%;
  // animation-name: ${rotatingAvatar};
  // animation-duration: ${ROTATE_DURATION};
  // animation-iteration-count: infinite;
  // animation-timing-function: linear;

  // &:third-child {
  //   transform: rotate(360deg) scale(1.3);
  // }

  &:nth-child(1) {
    // -ms-transform: rotate(110deg) scale(1);
    // transform: rotate(324deg) scale(1.8);
    // transform: rotate(324deg) scale(1.8);
    transform: rotate(30deg) scale(1);
  }

  &:nth-child(2) {
    // -ms-transform: rotate(110deg) scale(1);
    // transform: rotate(324deg) scale(1.8);
    -ms-transform: rotate(110deg) scale(1);
    -webkit-transform: rotate(324deg) scale(1.8);
    -ms-transform: rotate(324deg) scale(1.8);
    transform: rotate(25deg) scale(1.8);
  }

  &:nth-child(3) {
    // // transform: rotate(360deg) scale(1.3);
    // transform: rotate(110deg) scale(1);
    transform: rotate(17deg) scale(1.5);
  }

  &:nth-child(4) {
    // // transform: rotate(360deg) scale(1.3);
    // // transform: rotate(110deg) scale(1);
    // transform: rotate(296deg) scale(2);
    transform: rotate(325deg) scale(1.5);
    margin: 2%;
  }

  &:nth-child(5) {
    // // transform: rotate(360deg) scale(1.3);
    // // transform: rotate(110deg) scale(1);
    // transform: rotate(46deg) scale(2);
    // -webkit-transform: rotate(46deg) scale(2);
    // -ms-transform: rotate(46deg) scale(2);
    // transform: rotate(46deg) scale(2);
    transform: rotate(354deg) scale(1.3);
  }

  &:nth-child(6) {
    // transform: rotate(360deg) scale(1.3);
    // transform: rotate(110deg) scale(1);
    // transform: rotate(46deg) scale(2);
    // -webkit-transform: rotate(46deg) scale(2);
    // -ms-transform: rotate(46deg) scale(2);
    transform: rotate(46deg) scale(1.5);
  }

  &:nth-child(7) {
    // transform: rotate(360deg) scale(1.3);
    // transform: rotate(110deg) scale(1);
    // transform: rotate(46deg) scale(2);
    transform: rotate(322deg) scale(1.5);
  }

  &:nth-child(8) {
    // transform: rotate(87deg) scale(3);
    // transform: rotate(87deg) scale(3);
    // transform: rotate(317deg) scale(2);
    transform: rotate(322deg) scale(1.5);
    margin: 10%;
  }
`;

const AVATAR_DURATION = "2s";

const FloatingAvatar = keyframes`
0% {
  transform: translateY(5px);
}
50% {
  transform: translateY(-5px);
}
100% {
  transform: translateY(5px);
}
`;

const LandingImage = styled.img`
  // width: 100%;
  width: 20%;
  height: auto;
  animation-name: ${FloatingAvatar};
  animation-duration: ${AVATAR_DURATION};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;
