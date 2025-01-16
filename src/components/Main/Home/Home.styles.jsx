import styled from 'styled-components';
import MyImage from '../../../assets/my_image_web_no_bg.jpg';
import { darkgold, steelblue, steelgrey } from '../../../utils/colors.styles';

export const $Home = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const $Content = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    font-size: 1rem;
    color: ${steelgrey};
    white-space: normal;
    word-wrap: break-word;
    margin-bottom: 30px;
  }
`;

export const $Span = styled.span`
  font-size: ${({ $motto }) => $motto ? '1.8rem' : '1.6rem'};
  color: ${({ $motto }) => $motto ? steelblue : darkgold};
  font-weight: bold;
`;

export const $Photo = styled.div`
  display: flex;
`
