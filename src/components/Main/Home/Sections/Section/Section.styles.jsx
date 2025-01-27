import { styled } from "styled-components";
import {
  darkgold,
  lightgold,
  steelblue,
  steelgrey,
} from "../../../../../utils/colors.styles";

export const $IconBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  .icon {
    color: ${darkgold};
    position: absolute;
    font-size: 200px;
    opacity: 0.15;
  }
`;

export const $Section = styled.div`
    z-index: 1;
    min-height: 230px;
    border: 3px solid ${darkgold};
    border-radius: 10px;
    padding: 20px;
    margin: 10px;

    & p {
        color: ${steelgrey};
    }

    & h1 {
        color: ${steelblue};
    }

    &:hover {
        border: 3px solid ${lightgold};

        & h1 {
            color: ${lightgold};
        }
    }

    @media (max-width: 1024px) {
        min-height: 0px;
    }
  }
`;
