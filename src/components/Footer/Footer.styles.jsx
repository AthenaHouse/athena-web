import styled from "styled-components";
import { appwhite, appblack } from "../../utils/colors.styles.jsx";

export const $Footer = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  padding: 5px 10px;
  background-color: ${appblack};
  color: ${appwhite};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
  font-size: 12px;

  @media (max-width: 449px) {
    height: 40px;
  }
`;
