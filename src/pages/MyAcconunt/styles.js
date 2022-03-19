import styled from "styled-components/macro"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;

    div{
        display: grid;
        grid-template-rows: auto 1fr auto;
        width: 300px;

        @media (max-width: 640px) {
            height: 100%;
        }

        h1 {
            font-size: var(--lg);
            margin-bottom: 36px;
            text-align: start;
        }

        form {
            display: flex;
            flex-direction: column;

            @media (max-width: 640px){
                height: 100%;
                justify-content: space-between;
            }

            div {
                display: flex;
                flex-direction: column;

                label {
                    font-size: var(--sm);
                    font-weight: bold;
                    margin-bottom: 4px;
                }

                p {
                    color: var(--very-light-pink);
                    font-size: var(--md);
                    margin: 8px 0 32px 0;
                }
            }

            button {
                //Secondary btn
                background-color: var(--white);
                border-radius: 8px;
                border: 1px solid var(--hospital-green);
                color: var(--hospital-green);
                width: 100%;
                cursor: pointer;
                font-size: var(--md);
                font-weight: bold;
                height: 50px;

                // login btn
                margin-top: 14px;
                margin-bottom: 30px;
            }
        }
    }

`