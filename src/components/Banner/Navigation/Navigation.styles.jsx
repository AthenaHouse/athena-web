import { styled, keyframes } from "styled-components";
import { Link } from 'react-router-dom';
import { steelblue } from "../../../utils/colors.styles";

const revealTriangle = keyframes`
  from { 
    opacity: 3;
    background-color: white; 
  } to { 
    opacity: 0; 
    background-color: ${steelblue}; 
  } 
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AnimationOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  pointer-events: none;
`;

export const Triangle = styled.div`
  width: 20px;
  height: 17.32px;
  background-color: white;
  clip-path: ${({ isFlipped }) => isFlipped ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(50% 100%, 0% 0%, 100% 0%)'};
  animation: ${({ delay }) => revealTriangle} 1s ${({ delay }) => delay}s forwards;
`;

export const $Navigation = styled.div`
  display: flex;
  gap: 20px;
  align-items: center
`;

export const $Link = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default $Navigation;