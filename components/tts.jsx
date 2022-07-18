export default function Tts(props) {
  // We have to check if the window object exists to make sure Next runs this client-side
  if (typeof window !== "undefined") {
    const synth = window.speechSynthesis;

    // props.children contains the text we want to be read aloud
    const utterThis = new SpeechSynthesisUtterance(props.children);

    // Slow the rate a bit.
    utterThis.rate = 0.7;

    // Get all available voices, and filter to just Hazel (Microsoft UK English) for now
    const voicesUk = synth
      .getVoices()
      //.filter((voice) => voice.lang === "en-GB");
      .filter((voice) => voice.name.includes("Hazel"));
    console.log(voicesUk);

    // Hazel is the only item in the area. Set the voice to this
    utterThis.voice = voicesUk[0];

    // When the TTS div is clicked, do the speaking!
    document.querySelector(".tts").addEventListener("click", () => {
      synth.speak(utterThis);
      // console.log("hello");
    });
  }

  return <div className="tts">[speaker icon goes here] {props.children}</div>;
}
