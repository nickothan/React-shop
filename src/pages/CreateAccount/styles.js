import styled from 'styled-components/macro'

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
            margin-bottom: 36px;
            text-align: start;
        }

        form {
            display: flex;
            flex-direction: column;

            div {
                display: flex;
                flex-direction: column;
            }

            label {
                font-size: var(--sm);
                font-weight: bold;
                margin-bottom: 4px;
            }

            input {
                background-color: var(--text-input-field);
                border: none;
                border-radius: 8px;
                height: 30px;
                font-size: var(--md);
                padding: 6px;
                // name, email, pssw
                margin-bottom: 22px;

                &[type=submit] {
                    margin-bottom: 12px;
                }
            }
        }
    }
`