import styled from 'styled-components';
import { darkgold, steelblue, steelgrey } from '../../../utils/colors.styles';

export const $Home = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;

    & p {
      font-size: 0.9rem;
      margin-bottom: 20px;
    }
  }
`;

export const $Span = styled.span`
  font-size: ${({ $motto }) => $motto ? '1.8rem' : '1.6rem'};
  color: ${({ $motto }) => $motto ? steelblue : darkgold};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: ${({ $motto }) => $motto ? '1.6rem' : '1.4rem'};
  }
`;


export const $Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  & img {
    @media (max-width: 1024px) {
      width: 350px;
      height: auto;
    }
  }
`;
