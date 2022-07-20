import PhonemeLayout from "../../components//PhonemeLayout";

export default function PhonemeFirstStep() {
  const html = (
    <>
      <p>HERE IS A CONGRATS PLACEHOLDER</p>;
      <p>we can send as much jsx here in this variable</p>
      <p>it's very handy!</p>
    </>
  );
  return (
    <PhonemeLayout
      firstText={"Well done, you got it right!"}
      secondText={"Press the button to go to the next word."}
      context={html}
    />
  );
}
