import { styled } from 'styled-components';

export const $Sections = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-around;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`

export default $Sections;