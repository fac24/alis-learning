import Tts from "../components/tts";
import Link from "next/link";
import GameNext from "../components/Styled-Components/GameNext";
import { ImMic, ImHome3 } from "react-icons/im";

export default function LearnerOnboardingLayout({ nextStep, word }) {
  return (
    <>
      <ImHome3
        // We probably want to wrap this in a link onc
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
        }}
        size="50px"
        cursor="pointer"
        // color="" if we want to change the colour
        // can add an onclick here too
      />
      <Tts>Can you read the word?</Tts>

      <p>GAME WILL GO HERE</p>
      <Link href={`/phoneme-game/${nextStep}`}>
        <GameNext>
          <ImMic /> Go!
        </GameNext>
      </Link>
      <Tts>Press the button and read the word out loud</Tts>
    </>
  );
}
