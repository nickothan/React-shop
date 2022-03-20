import styled from 'styled-components/macro'

export const Container = styled.section`

ul {

    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    gap: 26px;
    place-content: center;

    

    @media (max-width: 640px) {
        grid-template-columns: repeat(auto-fill, 140px);
    
    }
}


`
