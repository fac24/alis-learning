import Tts from "../components/tts";
import Link from "next/link";

export default function ChildLanding() {
  return (
    <>
      <h2>Hi, --learners name here --!</h2>
      <Tts>What game would you like to play?</Tts>
      <Link href="phoneme-game/first-step">
        <a>Phoneme Game</a>
      </Link>
    </>
  );
}
