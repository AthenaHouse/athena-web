import { styled } from "styled-components";

export const $Logo = styled.img`
  height: 90px;
  width: auto;
  display: block;
  user-select: none;

  @media (max-width: 1100px) { 
    height: 75px;
  }
`;

export default $Logo;