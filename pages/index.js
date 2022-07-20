import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Link href="learner-onboarding/avatar-selection">
        <ChildStart>Get started</ChildStart>
      </Link>
      <Link href="adult-onboarding1">Go to parents section</Link>
    </>
  );
}

const ChildStart = styled.a`
  position: absolute;
  bottom: 7rem;
  left: 50%;
  margin-left: -6.5rem;
  width: 15rem;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  border-radius: 20px;
  border: none;
  background-color: orange;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    transform: translateY(0.125rem);
  }
`;
