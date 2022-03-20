import styled from "styled-components";

export const Container = styled.li`
    width: 240px;

    img {      
    width: 240px;
    height: 240px;
    border-radius: 20px;
    object-fit: cover;
    }

    div {
        display: flex;
        justify-content: space-around;
        
        div{
            
            display: flex;
            flex-direction: column;
            text-align: start;
            p{
                margin: 0;

                &:nth-child(1) {
                    font-weight: bold;
                    font-size: var(--md);
                    margin-top: 0;
                    margin-bottom: 4px;
                }
                .product-info div p:nth-child(2) {
                    font-size: var(--sm);
                    color: var(--very-light-pink);
                }
            }
        }

        figure{
            align-self: flex-start;
            margin: 0;
            cursor: pointer;

            img {
                width: 35px;
                height: 35px;
            }
        }
    }


    @media (max-width: 640px){
        
            width: 140px;
        
            img {
                width: 140px;
                height: 140px;
            }
        }

`