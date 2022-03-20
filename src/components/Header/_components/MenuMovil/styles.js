import styled from 'styled-components/macro'

export const Container = styled.div`
    padding: 24px;

    ul {
        padding: 0;
        margin: 24px 0 0;
        list-style: none;

        li {
            margin-bottom: 24px;

            &:nth-child(10){
                a {
                    font-size: var(--sm);
                    font-weight: 300 !important;
                }
            }
            &:nth-child(11){
                font-size: var(--sm);
                color: var(--hospital-green) !important;
            }
        }

        &:nth-child(1){
            border-bottom: 1px solid var(--very-light-pink);
        }
    }
`