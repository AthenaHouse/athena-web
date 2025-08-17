import { styled } from "styled-components";
import {
  appgreen,
  darkgold,
  steelblue,
  steelgrey,
} from "../../../../utils/colors.styles.jsx";

export const $Info = styled.div`
  width: 50%;
  text-align: center;

  h2 {
    color: ${steelblue};
  }

  p {
    color: ${steelgrey};

    & > :first-child {
      color: ${appgreen};
    }
  }

  a {
    color: ${steelgrey};

    & > :first-child {
      color: ${darkgold};
    }
  }
`;
