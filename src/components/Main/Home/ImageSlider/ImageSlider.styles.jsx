import { keyframes, styled, css } from "styled-components";
import { appwhite, steelblue } from "../../../../utils/colors.styles.jsx";

const fadeIn = css`
  opacity: 1;
  transition: opacity 0.3s ease-in;
`;

const fadeOut = css`
  opacity: 0;
  transition: opacity 0.3s ease-out;
`;

export const $Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const $ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${({ fade }) => (fade ? fadeIn : fadeOut)};
  cursor: pointer;
`;

export const $Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const $Text = styled.div`
  position: absolute;
  top: 55%;
  width: 90%;
  max-width: 1024px;
  text-align: center;
  color: ${appwhite};
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.5em;
  border-radius: 10px;

  @media (max-width: 1100px) {
    top: 40%;
  }
`;

const progress = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

export const $ProgressBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const $ProgressBar = styled.div`
  height: 100%;
  background-color: ${steelblue};
  animation: ${progress} 10s linear;
`;

export const $ArrowLeft = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  color: ${appwhite};
  cursor: pointer;
  z-index: 2;
  user-select: none;
`;

export const $ArrowRight = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  color: ${appwhite};
  cursor: pointer;
  z-index: 2;
  user-select: none;
`;

export const $PauseIndicator = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  color: ${appwhite};
  font-size: 1rem;
`;

export const $PauseButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 0.5em 1em;
  background-color: rgba(0, 0, 0, 0.6);
  color: ${appwhite};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
