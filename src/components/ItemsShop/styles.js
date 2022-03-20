import styled from 'styled-components/macro'

export const Container = styled.section`

ul {

    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    gap: 26px;
    place-content: center;

    li {
        width: 240px;

        img {      
        width: 240px;
        height: 240px;
        border-radius: 20px;
        object-fit: cover;
        }

        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 12px;
            
            p{

                &:nth-child(1) {
                    font-weight: bold;
                    font-size: var(--md);
                    margin-top: 0;
                    margin-bottom: 4px;
                }
                .product-info div p:nth-child(2) {
                    font-size: var(--sm);
                    margin-top: 0;
                    margin-bottom: 0;
                    color: var(--very-light-pink);
                }
            }
        }

        figure{
            margin: 0;

            img {
                width: 35px;
                height: 35px;
            }
        }
    }

    @media (max-width: 640px) {
        grid-template-columns: repeat(auto-fill, 140px);
    
        li{
            width: 140px;
        
            img {
                width: 140px;
                height: 140px;
            }
        }
    }
}


`
