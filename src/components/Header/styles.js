import styled from 'styled-components'

export const Container = styled.header`
    nav {
        display: flex;
        justify-content: space-between;
        padding: 0 24px;
        border-bottom: 1px solid var(--very-light-pink);  

        img {
            display: none;
            @media (max-width: 640px) {
                display: block;

            }
        }

        div {
            display: flex;
            img {
                display:block;
            }


            ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                align-items: center;
                height: 60px;

                li {

                    a {
                        text-decoration: none;
                        color: var(--very-light-pink);
                        border: 1px solid var(--white);
                        padding: 8px;
                        border-radius: 8px;

                        &:hover {
                            border: 1px solid var(--hospital-green);
                            color: var(--hospital-green);
                        }
                    }
                }
            }

            &:nth-child(2) {
                display: flex;

                ul {
                    margin-left: 12px;

                    @media (max-width: 640px) {
                        display: none;
                    }
                }
            }

            &:nth-child(3) {

                ul {

                    li {

                        &:nth-child(1) {

                            color: var(--very-light-pink);
                            font-size: var(--sm);
                            margin-right: 12px;

                            @media (max-width: 640px) {
                                display: none;
                            }
                        }

                        &:nth-child(2) {
                            position: relative;
                            

                            div {
                                width: 16px;
                                height: 16px;
                                background-color: var(--hospital-green);
                                border-radius: 50%;
                                font-size: var(--sm);
                                font-weight: bold;
                                position: absolute;
                                top: -6px;
                                right: -3px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }
                        }
                    }
                }
            }

        }
    }

`
