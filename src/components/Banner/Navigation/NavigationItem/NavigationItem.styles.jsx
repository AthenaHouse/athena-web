import { styled } from 'styled-components';
import { darkgold, lightgold } from '../../../../utils/colors.styles';

export const $NavigationItem = styled.div`
  display: flex;
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

