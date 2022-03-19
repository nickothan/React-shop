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

        img {
            width: 150px;
            margin-bottom: 48px;
            justify-self: center;
            display: none;

            @media (max-width: 640px) {
                display: block;
            }
        }

        form {
            display: flex;
            flex-direction: column;

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
                margin-bottom: 12px;

                &[type=email]{
                    margin-bottom: 22px;
                }

                &[type=submit]{
                    background-color: var(--hospital-green);
                    border-radius: 8px;
                    border: none;
                    color: var(--white);
                    width: 100%;
                    cursor: pointer;
                    font-size: var(--md);
                    font-weight: bold;
                    height: 50px;

                    margin-top: 14px;
                    margin-bottom: 30px;
                }
            }
        }

        button {
            background-color: var(--white);
            border-radius: 8px;
            border: 1px solid var(--hospital-green);
            color: var(--hospital-green);
            width: 100%;
            cursor: pointer;
            font-size: var(--md);
            font-weight: bold;
            height: 50px;
        }

    }
`