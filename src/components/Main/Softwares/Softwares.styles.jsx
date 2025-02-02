import { styled } from "styled-components";
import { darkgold } from "../../../utils/colors.styles";

export const $Softwares = styled.div`
  margin-top: 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const $Line = styled.hr`
  border: 0;
  border-top: 1px solid ${darkgold};
  width: 100%;
  margin: 0;
`;
