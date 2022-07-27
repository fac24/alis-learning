import { useRef, useEffect } from "react";
import { AiTwotoneSound } from "react-icons/ai";
import TtsSpeakerAndText from "./Styled-Components/TtsSpeakerAndText";

export default function Tts(props) {
  const ref = useRef(null);

  // We use useEffect to make sure Next runs this client-side
  // (so that the window object exists)
  useEffect(() => {
    const synth = window.speechSynthesis;

    // props.children contains the text we want to be read aloud
    const utterThis = new SpeechSynthesisUtterance(props.children);

    // Slow the rate a bit.
    utterThis.rate = 0.85;

    // An empty array to hold the list of voices
    let voicesUk = [];

    function populateAndFilterVoiceList() {
      // Get all available voices, and filter to just Hazel (Microsoft UK English) for now
      voicesUk = synth
        .getVoices()
        // .filter((voice) => voice.lang === "en-GB");
        .filter((voice) => voice.name.includes("Hazel"));

      // Todo: handle cases without Hazel!

      // console.log(voicesUk);

      // Hazel is the only item in the area. Set the voice to this
      utterThis.voice = voicesUk[0];
    }

    populateAndFilterVoiceList();

    // The list of voices is(/may be?) populated by the browser asynchronously.
    // We can use the onvoiceschanged event to find out when it has finished loading.
    // (If we don't do this, Chrome (only?) will think the list is empty until
    // "some unspecified time later".)
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateAndFilterVoiceList;
    }
    // (This follows the pattern set out here:
    // https://github.com/mdn/dom-examples/blob/master/web-speech-api/speak-easy-synthesis/script.js)

    // The function to run when the TTS component is clicked:
    function readOut() {
      // Actually do the TTS! :)
      synth.speak(utterThis);
    }

    const element = ref.current;

    element.addEventListener("click", readOut);

    element.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        readOut();
      }
    });

    function cleanup() {
      element.removeEventListener("click", readOut);
      // element.addEventListener("keydown", (e) => {
      //   if (e.keyCode === 13) readOut();
      // });
    }

    return cleanup;
  }, [props.children]);

  return (
    <TtsSpeakerAndText ref={ref} tabIndex={0}>
      <AiTwotoneSound size="2.5rem" /> {props.children}
    </TtsSpeakerAndText>
  );
}
