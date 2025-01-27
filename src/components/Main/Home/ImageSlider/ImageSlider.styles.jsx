import { keyframes, styled } from "styled-components";
import { appwhite, steelblue } from "../../../../utils/colors.styles.jsx";

export const $Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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

  @media (max-width: 1024px) {
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
  animation: ${progress} 10s linear infinite;
`;
