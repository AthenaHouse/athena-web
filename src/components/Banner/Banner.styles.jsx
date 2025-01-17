import styled from 'styled-components';
import { appwhite } from '../../utils/colors.styles.jsx';

export const $Banner = styled.header`  
  position: relative;
  top: 0;
  width: 100%;
  height: 100px;
  padding: 5px 100px;
  margin-bottom: 25px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-color: ${appwhite};
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 1024px) {
    height: auto;
    padding: 10px 20px;
    flex-direction: column;
    align-items: center;
  }
`;

export default $Banner;
