import styled from "styled-components"

export const Button = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border-color: var(--primary-red);
  &:hover {
    background-color: var(--primary-hover-red);
    border-color: var(--dark-red);
  }
`;