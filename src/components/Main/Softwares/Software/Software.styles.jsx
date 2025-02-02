import { styled } from "styled-components";
import {
  lightgold,
  steelblue,
  steelgrey,
} from "../../../../utils/colors.styles.jsx";

export const $DropdownWrapper = styled.div`
  display: block;
`;

export const $Software = styled.div`
  display: grid;
  grid-template-columns: 50px 0.2fr 1fr 20px;
  gap: 10px;
  padding: 10px;
  grid-template-areas: "img name description expand";

  @media (max-width: 1024px) {
    grid-template-columns: 50px 1fr 20px;
    grid-template-rows: auto auto;
    grid-template-areas:
      "img name expand"
      "description description description";
  }
`;

export const $Expand = styled.div`
  grid-area: expand;
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 2rem;
  color: ${steelblue};

  &:hover {
    color: ${lightgold};
  }
`;

export const $ImgWrapper = styled.div`
  grid-area: img;
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const $Img = styled.img`
  height: 50px;
`;

export const $Name = styled.div`
  grid-area: name;
  display: flex;
  align-items: center;
  justify-content: left;
  color: ${steelblue};
  font-weight: bold;
`;

export const $Description = styled.p`
  grid-area: description;
  display: flex;
  align-items: center;
  justify-content: left;
  color: ${steelgrey};
  font-size: 0.9em;
`;

export const $Details = styled.div`
  &.dropdown-enter {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }

  &.dropdown-enter-active {
    opacity: 1;
    max-height: 400px;
    transition: opacity 300ms, max-height 500ms;
  }

  &.dropdown-exit {
    opacity: 1;
    max-height: 400px;
  }

  &.dropdown-exit-active {
    opacity: 0;
    max-height: 0;
    transition: opacity 300ms, max-height 500ms;
  }
`;
