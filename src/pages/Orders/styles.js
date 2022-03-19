import styled from "styled-components/macro"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;

    div {
        display: grid;
        grid-template-rows: auto 1fr auto;
        width: 300px;

        h1 {
            font-size: var(--lg);
            margin-bottom: 40px;
        }

        ul {
            display: flex;
            flex-direction: column;

            li {
                display: grid;
                grid-template-columns: auto 1fr auto;
                gap: 16px;
                align-items: center;
                margin-bottom: 12px;

                p {

                    &:nth-child(1) {
                        display: flex;
                        flex-direction: column;

                        span {

                            &:nth-child(1) {
                                font-size: var(--md);
                                font-weight: bold;
                            }

                            &:nth-child(2) {
                                font-size: var(--sm);
                                color: var(--very-light-pink);
                            }
                        }
                    }

                    &:nth-child(2) {
                        text-align: end;
                        font-weight: bold;
                    }
                }
            }
        }
    }
`