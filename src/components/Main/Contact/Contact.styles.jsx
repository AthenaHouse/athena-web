import { styled } from "styled-components";

export const $Contact = styled.div`
  margin-top: 10px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5em;

  @media (max-width: 1100px) { 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }
`