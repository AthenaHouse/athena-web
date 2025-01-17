import { styled } from "styled-components";

export const $Logo = styled.img`
  height: 100%;
  user-select: none;

  @media (max-width: 1024px) { 
    height: 75px;
  }
`;

export default $Logo;