import { styled } from 'styled-components';

export const $Sections = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-around;

    @media (max-width: 1100px) {
        flex-direction: column;
    }
`

export default $Sections;