import Link from "next/link";
import styled from "styled-components";
import AdultsBack from "../components/AdultsBack";
import AdultsNext from "../components/AdultsNext";

export default function Adult() {
  return (
    // parent crab claws
    // sending it the page it is coming from for back / next functionality
    // if its the first page we will send different text to the button
    // will accept a boolean of true.
    <>
      <AdultsNext page={1} firstPage={true} />
      <AdultsBack page={1} />
    </>
  );
}
