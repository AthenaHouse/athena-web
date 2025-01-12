import { styled } from 'styled-components';
import { darkgold, lightgold, steelblue } from '../../../../utils/colors.styles';

export const $NavigationItem = styled.div`
  display: flex;
  color: ${steelblue};
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-align: center;

  &:hover {
    color: ${lightgold};
    cursor: pointer;

    & > :first-child { 
    color: ${lightgold}; 
    }
  }
`;

export const $Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: ${darkgold};
`;

