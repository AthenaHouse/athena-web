import { styled } from "styled-components";
import { Link } from 'react-router-dom';

export const $Navigation = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const $Link = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default $Navigation;