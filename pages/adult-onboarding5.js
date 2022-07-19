import AdultsBack from "../components/AdultsBack";
import AdultsNext from "../components/AdultsNext";
import AdultText from "../components/Styled-Components/AdultText";
import Title from "../components/Styled-Components/Title";

export default function Adult() {
  return (
    <>
      <Title>Great.</Title>
      <AdultText>
        Now pass the device over to the learner, and they&apos;ll be able to
        customise their learning experience.
      </AdultText>
      <AdultsNext page={5} />
      <AdultsBack page={5} />
    </>
  );
}