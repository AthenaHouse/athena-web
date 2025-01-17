import { styled } from 'styled-components';

export const $Language = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & a { 
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        outline: none;
        
        & img { 
            width: 48px;
            height: 48px;
            border-radius: 50%; 
        } 
    }
`

export default $Language;