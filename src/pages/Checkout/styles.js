import styled from 'styled-components/macro'

export const Container = styled.aside`
    width: 360px;
    padding: 24px;
    box-sizing: border-box;
    position: absolute;
    right: 0;

    @media (max-width: 640px) {
        width: 100%;
    }

`

export const Title = styled.div`
    display: flex;

    img {
        transform: rotate(180deg);
        margin-right: 14px;
    }

    p {
        font-size: var(--lg);
        font-weight: bold;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    ul {
        display: flex;
        flex-direction: column;

        li {
            display: grid;
            grid-template-columns: auto 1fr auto auto;
            gap: 16px;
            margin-bottom: 24px;
            align-items: center;

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
                    color: var(--very-light-pink);
                }
                    
                &:nth-child(2) {
                    font-size: var(--md);
                    font-weight: bold;
                }
            }
        }
    }

    div {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 16px;
        align-items: center;
        background-color: var(--text-input-field);
        margin-bottom: 24px;
        border-radius: 8px;
        padding: 0 24px;

        p {

            &:nth-child(1){
                
                display: flex;
                flex-direction: column;
                
                span {
                    font-size: var(--md);
                    font-weight: bold;
                }
            }
            &:nth-child(2){
                text-align: end;
                font-weight: bold;
            }

        }
    }

    button {
        background-color: var(--hospital-green);
        border-radius: 8px;
        border: none;
        color: var(--white);
        width: 100%;
        cursor: pointer;
        font-size: var(--md);
        font-weight: bold;
        height: 50px;
    }

`