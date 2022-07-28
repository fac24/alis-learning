import { useEffect, useState } from "react";
import PhonemeLayout from "../components/PhonemeLayout";
import { phonemeData } from "../data/phoneme.js";
import styled from "styled-components";
import GameNext from "../components/Styled-Components/GameNext";
import GameGoButton from "../components/Styled-Components/GameGoButton";
import { ImMic } from "react-icons/im";
import Star from "../public/decorations/star.svg";
import trumpet from "../public/decorations/trumpet.svg";
import icecream from "../public/decorations/icecream.svg";
import bullseye from "../public/decorations/bullseye.svg";
import rainbow from "../public/decorations/rainbow.svg";
import Image from "next/image";

export default function PhonemeFirstStep({
  phonemeLevel,
  setPhonemeLevel,
  stars,
  setStars,
}) {
  const learnerPromptDefault = "Can you read the word?";
  const learnerPrompt2Default = "Press the button and read the word out loud";

  const [phonemeTiles, setPhonemeTiles] = useState([]);
  const [phonemeWord, setPhonemeWord] = useState("");
  const [learnerPrompt, setLearnerPrompt] = useState(learnerPromptDefault);
  const [learnerPrompt2, setLearnerPrompt2] = useState(learnerPrompt2Default);

  const [gameState, setGameState] = useState("new");

  let currentWordObject = phonemeData.find(
    (word) => word.level === phonemeLevel
  );

  // setting the phoneme tiles here inside the useEffect as we need to page to be rendered and loaded first
  useEffect(() => {
    setPhonemeTiles(currentWordObject.phonemes);
    setPhonemeWord(currentWordObject.word);
  }, [currentWordObject]);

  let recogniseLearnerSpeech;

  if (typeof window !== "undefined") {
    const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
    const SpeechRecognitionEvent =
      SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

    recogniseLearnerSpeech = function (buttonEvent) {
      buttonEvent.target.disabled = true;
      setGameState("listening");

      // We need to have the next few lines to keep the API happy...
      const grammar =
        "#JSGF V1.0; grammar word; public <word> = " + phonemeWord + ";";
      const recognition = new SpeechRecognition();
      const speechRecognitionList = new SpeechGrammarList();
      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;
      recognition.lang = "en-GB";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.start();

      recognition.onresult = function (event) {
        // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
        // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
        // It has a getter so it can be accessed like an array
        // The first [0] returns the SpeechRecognitionResult at position 0.
        // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
        // These also have getters so they can be accessed like arrays.
        // The second [0] returns the SpeechRecognitionAlternative at position 0.
        // We then return the transcript property of the SpeechRecognitionAlternative object
        const speechResult = event.results[0][0].transcript.toLowerCase();
        console.log("Speech received: " + speechResult);

        // Did the user say the right word?
        if (speechResult === phonemeWord) {
          // Yes: change the prompts, button, and update state for the phoneme level.
          setLearnerPrompt("Well done, you got it right!");
          setLearnerPrompt2("Press the button to go to the next word");
          // Every correct word guessed results in the star count increasing by one
          setStars(() => stars + 1);
          // The "listen" button is hidden and a "next" button takes it place
          setGameState("correct");
        } else {
          // No: change the prompts accordingly
          setLearnerPrompt("Nearly, try again!");
          setGameState("incorrect");
        }

        // console.log("Confidence: " + event.results[0][0].confidence);
      };

      recognition.onspeechend = function () {
        recognition.stop();
        buttonEvent.target.disabled = false;
        setGameState("new");
      };

      recognition.onerror = function (event) {
        buttonEvent.target.disabled = false;
        setGameState("new");
        console.log("Error occurred in recognition: " + event.error);
      };

      recognition.onaudiostart = function (event) {
        //Fired when the user agent has started to capture audio.
        // console.log("SpeechRecognition.onaudiostart");
      };

      recognition.onaudioend = function (event) {
        //Fired when the user agent has finished capturing audio.
        // console.log("SpeechRecognition.onaudioend");
      };

      recognition.onend = function (event) {
        //Fired when the speech recognition service has disconnected.
        // console.log("SpeechRecognition.onend");
      };

      recognition.onnomatch = function (event) {
        //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
        //console.log("SpeechRecognition.onnomatch");
      };

      recognition.onsoundstart = function (event) {
        //Fired when any sound — recognisable speech or not — has been detected.
        // console.log("SpeechRecognition.onsoundstart");
      };

      recognition.onsoundend = function (event) {
        //Fired when any sound — recognisable speech or not — has stopped being detected.
        // console.log("SpeechRecognition.onsoundend");
      };

      recognition.onspeechstart = function (event) {
        //Fired when sound that is recognised by the speech recognition service as speech has been detected.
        // console.log("SpeechRecognition.onspeechstart");
      };
      recognition.onstart = function (event) {
        //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
        // console.log("SpeechRecognition.onstart");
      };
    };
  }

  function nextLevel() {
    setPhonemeLevel(() => phonemeLevel + 1);
    setGameState("new");
    setLearnerPrompt(learnerPromptDefault);
    setLearnerPrompt2(learnerPrompt2Default);
  }

  return (
    <>
      <PhonemeLayout
        firstText={learnerPrompt}
        secondText={learnerPrompt2}
        phonemeLevel={phonemeLevel}
        stars={stars}
      >
        <GameContainer>
          {gameState === "correct" ? (
            <>
              <div style={{ padding: "50px", marginTop: "-100px" }}>
                <Image src={trumpet} alt="trumpet" width={100} height={100} />
              </div>
              <div style={{ padding: "50px" }}>
                <Image src={rainbow} alt="trumpet" width={100} height={100} />
              </div>
            </>
          ) : null}
          <TileContainer>
            {phonemeTiles.map((tile, index) => (
              <PhonemeTile className={gameState} key={index}>
                {tile}
              </PhonemeTile>
            ))}
          </TileContainer>
          {gameState === "correct" ? (
            <>
              <div style={{ padding: "50px", marginTop: "-100px" }}>
                <Image src={bullseye} alt="trumpet" width={100} height={100} />
              </div>
              <div style={{ padding: "50px" }}>
                <Image src={icecream} alt="trumpet" width={100} height={100} />
              </div>
            </>
          ) : null}
        </GameContainer>
      </PhonemeLayout>

      {gameState !== "correct" ? (
        <GameGoButton
          onClick={(event) => {
            typeof window !== "undefined"
              ? recogniseLearnerSpeech(event)
              : console.log("Waiting for window...");
          }}
        >
          <StyledImMic />
          {gameState === "listening"
            ? "Listening..."
            : gameState === "incorrect"
            ? "Try again"
            : "Go"}
        </GameGoButton>
      ) : (
        <>
          <GameNext onClick={() => nextLevel()}>Next</GameNext>
          <NewStarContainer>
            <Image src={Star} alt="star" width={90} height={20} />
            <StarPlusText>+ 1</StarPlusText>
          </NewStarContainer>
        </>
      )}
    </>
  );
}

// Add drop-shadow to the SVG microphone icon:
const StyledImMic = styled(ImMic)`
  filter: drop-shadow(0 0.15rem 0.05rem rgba(0, 0, 0, 0.5));
`;

const PhonemeTile = styled.div`
  align-items: center;
  background-color: #faf8f1;
  border: 4px solid #f6edbc;
  border-radius: 0.625rem;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  cursor: default;
  display: flex;
  font-size: 4rem;
  font-weight: bold;
  height: 7rem;
  justify-content: center;
  // line-height: 5rem;
  margin: 0 0.25rem;
  // user-select: none;
  width: 7rem;

  &.incorrect {
    border-color: crimson;
  }

  &.correct {
    border-color: #11d600;
    // border-image: linear-gradient(#11d600, #21a300) 5;
  }
`;

const TileContainer = styled.div`
  display: flex;
  text-align: center;
  margin: 0 auto;
  width: fit-content;
`;

const NewStarContainer = styled.div`
  display: flex;
  margin: 1rem auto;
  max-width: 9rem;
  justify-content: space-between;
`;

const StarPlusText = styled.p`
  font-weight: 600;
  font-size: 40px;
`;

const GameContainer = styled.div`
  display: flex;
`;
