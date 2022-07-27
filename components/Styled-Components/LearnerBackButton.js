import styled from "styled-components";

const LearnerBackButton = styled.a`
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.5);
  color: #000;
  cursor: pointer;
  display: block;
  margin: 3rem 0 3rem 2rem;
  padding: 0.5rem 6rem;
  font-size: 1.75rem;
  font-weight: bold;
  letter-spacing: 0.25rem;
  text-decoration: none;
  width: fit-content;

  &:active {
    transform: translateY(0.2rem);
  }
`;

export default LearnerBackButton;
