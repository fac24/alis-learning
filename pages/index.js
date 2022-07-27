import Link from "next/link";
// import styled from "styled-components";
import avatars from "../data/avatars";
// import Image from "next/image";
import styled, { keyframes } from "styled-components";

export default function Home({ onboarding }) {
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
      <Link
        href={
          onboarding ? "child-landing" : "learner-onboarding/avatar-selection"
        }
        passHref
      >
        <ChildStart id="get_started">Get started!</ChildStart>
      </Link>
      <Link href="adult-onboarding1" passHref>
        <ParentStart>Go to parents section</ParentStart>
      </Link>
    </>
  );
}

const ChildStart = styled.a`
  position: absolute;
  top: 40%;
  left: 50%;
  margin-left: -6.5rem;
  width: 15rem;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  color: #000;
  font-size: 18px;
  font-weight: 700;
  border-radius: 20px;
  text-align: center;
  border: none;
  background-color: orange;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    transform: translateY(0.125rem);
  }

  @media only screen and (max-width: 600px) {
    margin-left: -4.75rem;
    width: 10rem;
  }
`;

const ParentStart = styled.a`
  position: absolute;
  text-align: center;
  bottom: 15%;
  left: 50%;
  margin-left: -6.5rem;
  width: 15rem;
  padding: 1.5rem;
  box-shadow: rgb(136 136 136) 5px 10px 8px;
  color: white;
  font-size: 15px;
  border-radius: 20px;
  border: none;
  background-color: rgb(67, 22, 163);
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    transform: translateY(0.125rem);
  }
  @media only screen and (max-width: 600px) {
    margin-left: -4.75rem;
    width: 10rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  // column-gap: 80%;
  column-gap: 70%;

  @media only screen and (max-width: 600px) {
    column-gap: 25%;
    row-gap: 20%;
  }
`;

const Icon = styled.div`
  margin: 2rem;
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
  width: 100%;
  height: auto;
  animation-name: ${FloatingAvatar};
  animation-duration: ${AVATAR_DURATION};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;
