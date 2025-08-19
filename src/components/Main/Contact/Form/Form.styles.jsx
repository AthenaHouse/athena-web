import { styled } from "styled-components";
import { appgreen, appred, appwhite, steelgrey, darkgold, lightgold, steelblue } from "../../../../utils/colors.styles";

export const $Form = styled.form`
  margin-top: 25px;
  width: 50%;
  display: flex; 
  flex-direction: column;
  align-items: stretch;
  gap: 15px;

  @media (max-width: 1100px) { 
    width: 90%;
  }
`;

export const $Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1em;
  font-weight: bold;
  color: ${steelblue};
`

export const $Input = styled.input`
  width: 98%;
  font-size: 0.9em;
  font-family: inherit;
  color: ${steelgrey};
  padding: 4px 8px;
  border: 1px solid ${darkgold};
  height: 24px;

  &:focus {
    outline: none;
    border: 1px solid ${lightgold};
  }
`

export const $TextArea = styled.textarea`
  width: 98%;
  min-height: 180px;
  font-size: 0.9em;
  font-family: inherit;
  color: ${steelgrey};
  padding: 4px 8px;
  border: 1px solid ${darkgold};
  height: 24px;

  &:focus {
    outline: none;
    border: 1px solid ${lightgold};
  }
`

export const $Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const $Button = styled.button`
  font-size: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${appwhite};
  background: ${darkgold};
  cursor: pointer;
  border: 1px solid ${darkgold};
  user-select: none;
  padding: 8px 50px;

  &:hover {
    background: ${lightgold};
    border: 1px solid ${lightgold};
  }

  &:active {
    color: ${darkgold};
    border: 1px solid ${lightgold};
  }
`

export const $Status = styled.p`
  color: ${({ $status }) => ($status === true ? appgreen : appred)};
`;

