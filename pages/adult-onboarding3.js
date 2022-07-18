import Link from "next/link";
import styled from "styled-components";
import AdultsBack from "../components/AdultsBack";
import AdultsNext from "../components/AdultsNext";
import AdultText from "../components/Styled-Components/AdultText";

export default function Adult() {
  return (
    <>
      <AdultText>Choose a daily goal for the learner.</AdultText>
      <AdultsNext page={3} />
      <AdultsBack page={3} />
    </>
  );
}
