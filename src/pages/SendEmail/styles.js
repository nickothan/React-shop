import styled from "styled-components/macro"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
`

export const Content = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    width: 300px;
    justify-items: center;

    img {
        width: 150px;
        margin-bottom: 48px;
        justify-self: center;
        display: none;

        @media (max-width: 640px) {
            display: block;
        }
    }

    h1 {
        font-size: var(--lg);
        margin-bottom: 12px;
        text-align: center;
    }

    p {

        &:nth-child(1){
            color: var(--very-light-pink);
            font-size: var(--md);
            font-weight: 300;
            margin-top: 0;
            margin-bottom: 32px;
            text-align: center;
        }
        &:nth-child(2){
            font-size: var(--sm);

            span {
                color: var(--very-light-pink);
            }

            a {
                color: var(--hospital-green);
                text-decoration: none;
            }
        }
    }

    div {
        width: 132px;
        height: 132px;
        border-radius: 50%;
        background-color: var(--text-input-field);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 24px;

        img {
            width: 80px;
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

        //Login-button
        margin-top: 14px;
        margin-bottom: 30px;
    }
`
