import styled from 'styled-components/macro'

export const Container = styled.div`
    padding: 20px 20px 0 20px;
    width: 100px;
    height: auto;
    border: 1px solid var(--very-light-pink);
    border-radius: 6px;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            text-align: end;

            a {
                color: var(--back);
                text-decoration: none;
                margin-bottom: 20px;
                display: inline-block;
            }

            &:nth-child(1),
            &:nth-child(2) {
                font-weight: bold;
            }   

            &:last-child {
                padding-top: 20px;
                border-top: 1px solid var(--very-light-pink);

                a {
                    color: var(--hospital-green);
                    font-size: var(--sm);
                }
            }
        }
    }
`