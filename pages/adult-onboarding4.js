import Link from "next/link";
import styled from "styled-components";
import AdultsBack from "../components/AdultsBack";
import AdultsNext from "../components/AdultsNext";

export default function Adult() {
  return (
    <>
      <AdultsNext page={4} />
      <AdultsBack page={4} />
    </>
  );
}
