import PhonemeLayout from "../../components//PhonemeLayout";

export default function PhonemeFirstStep() {
  const html = (
    <>
      <p>HERE IS A GAME PLACEHOLDER</p>
      {["c", "a", "t"].map((letter) => (
        <p>{letter}</p>
      ))}
      <p>
        Just demonstation above that as this is jsx we can include js type
        syntax too
      </p>
    </>
  );
  return (
    <PhonemeLayout
      firstText={"Can you read the word?"}
      secondText={"Press the button and read the word out loud"}
      context={html}
    />
  );
}
