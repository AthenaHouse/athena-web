import styled from "styled-components";
import {
  appwhite,
  darkgold,
  lightgold,
  steelblue,
  steelgrey,
} from "../../../../../utils/colors.styles";

export const $Details = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "video description"
    "download download";
  gap: 25px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "video"
      "description"
      "download";
  }

  & p {
    margin-top: 0px;
    font-size: 0.8rem;
    color: ${steelgrey};
  }

  & li {
    padding: 0 10px;
    font-size: 0.8rem;
    color: ${steelgrey};
  }

  & h5 {
    color: ${steelblue};
    margin: 0;
  }
`;

export const $Download = styled.div`
  grid-area: download;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;

  & :first-child {
    padding: 10px 20px;
    background-color: ${darkgold};
    color: ${appwhite};

    &:hover {
      background-color: ${lightgold};
      cursor: pointer;
    }

    &:active {
      background-color: ${steelblue};
      transform: scale(0.95);
    }
  }

  & :nth-child(2) {
    font-size: 0.8rem;
    color: ${darkgold};

    &:hover {
      color: ${lightgold};
      cursor: pointer;
    }

    &:active {
      color: ${steelblue};
    }
  }
`;
