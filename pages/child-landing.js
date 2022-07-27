import Tts from "../components/Tts";
import Link from "next/link";
import styled from "styled-components";
import { useEffect } from "react";

export default function ChildLanding({ learnerName }) {
  return (
    <>
      <SayHi>{learnerName ? `Hi, ${learnerName}!` : "Hi there!"}</SayHi>

      <Tts>What game would you like to play?</Tts>


      <GameSelection>
        <Link href="404" passHref>
          <OneHundred>One Hundred Words</OneHundred>
        </Link>
        <Link href="phoneme-game" passHref>
          <GameTile tabIndex={0}>Phoneme Game</GameTile>
        </Link>
        <Link href="404" passHref>
          <StoryTime>Story Time</StoryTime>
        </Link>
      </GameSelection>

    </>
  );
}

const OneHundred = styled.a`
  border: 5px solid #ccc;
  border-radius: 1rem;
  cursor: pointer;
  display: block;
  text-align: center;
  font-weight: bold;
  max-width: 16rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  margin: 0 auto;
  text-decoration: none;
  color: black;

  &:hover {
    opacity: 0.7;
    border-color: #21a300;
    background-color: #cccccc;
    background-image: linear-gradient(#11d600, #21a300, darkorange);
  }
`;
const GameTile = styled.a`
  border: 5px solid #ccc;
  border-radius: 1rem;
  cursor: pointer;
  display: block;
  text-align: center;
  font-weight: bold;
  max-width: 16rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  margin: 0 auto;
  text-decoration: none;
  color: black;

  &:hover {
    color: white;
    border-color: #320e80;
    background-color: #cccccc;
    background-image: linear-gradient(#4316a3, #320e80, darkorange);
  }
`;

const StoryTime = styled.a`
  border: 5px solid #ccc;
  border-radius: 1rem;
  cursor: pointer;
  display: block;
  text-align: center;
  font-weight: bold;
  max-width: 16rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  margin: 0 auto;
  text-decoration: none;
  color: black;

  &:hover {
    opacity: 0.7;
    border-color: #21a300;
    background-color: #cccccc;
    background-image: linear-gradient(#11d600, #21a300, darkorange);
  }
`;

const SayHi = styled.h2`
  text-align: center;
`;

const GameSelection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-evenly;
`;
