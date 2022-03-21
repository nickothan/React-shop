import styled from 'styled-components/macro'

export const Container = styled.li`


    list-style: none;
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    gap: 16px;
    margin-bottom: 24px;
    align-items: center;

    img:last-child{
        cursor: pointer;
    }

    figure {
        margin: 0;
        
        
        img {
            width: 70px;
            height: 70px;
            border-radius: 20px;
            object-fit: cover;
        }
    }
    
    p{
        &:nth-child(1) {
            font-size: var(--md);
            font-weight: bold;
        }
        
        &:nth-child(2) {
            color: var(--very-light-pink);
        }
    }
    

`