import styled from 'styled-components/macro'

export const Container = styled.div`
    overflow: ${({toggle}) => toggle ? "scroll": "hidden"};
    position: absolute;
    box-sizing: border-box;
    right: 0;
    width: ${({toggle}) => toggle ? "100%": "0"};
    height: ${({toggle}) => toggle ? "100%": "0"};
    
    padding: ${({toggle}) => toggle ? "50px": "0"};
    display: grid;
    place-items: center;
    background-color: #000000c4;
    transition: .6s all ease-in-out;

    div {
        
        display: grid;
        grid-template-rows: auto 1fr auto;
        padding: 25px;
        max-width: 350px;
        background-color: var(--white);

        h1 {
            font-size: var(--lg);
            margin-bottom: 40px;
        }

        ul {
            display: flex;
            flex-direction: column;
            
            li {
                

                &:last-child{

                    display: grid;
                    grid-template-columns: auto 1fr;
                    gap: 16px;
                    align-items: center;
                    background-color: var(--text-input-field);
                    margin-bottom: 24px;
                    border-radius: 8px;
                    padding: 0 24px;
                    
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
    }
`