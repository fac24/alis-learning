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
        <Link href="">
          <GameTile>One Hundred Words</GameTile>
        </Link>
        <Link href="phoneme-game">
          <GameTile>Phoneme Game</GameTile>
        </Link>
        <Link href="">
          <GameTile>Story Time</GameTile>
        </Link>
      </GameSelection>
    </>
  );
}

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

  &:hover {
    border-color: #666;
  }
`;

const SayHi = styled.h2`
  text-align: center;
`;

const GameSelection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-around;
`;
