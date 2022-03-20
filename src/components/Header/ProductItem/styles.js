import styled from 'styled-components/macro'

export const Container = styled.aside`
    position: absolute;
    padding-bottom: 24px;
    right: 0;
    width: 360px;

    @media (max-width: 640px) {
        width:100%;
    }

    img{

        
        &:nth-child(2) {
            width: 100%;
            height: 360px;
            object-fit: cover;
            border-radius: 0 0 20px 20px;
        }
    }

    div {

        &:nth-child(1){
            z-index: 2;
            position: absolute;
            top: 24px;
            left: 24px;
            width: 14px;
            height: 14px;
            padding: 12px;
            background: var(--white);
            border-radius: 50%;
            cursor: pointer;
        }

        &:nth-child(2){
            margin: 24px 24px 0 24px;

            p{
                &:nth-child(1) {
                    margin-top: 0;
                    margin-bottom: 36px;
                    font-size: var(--md);
                    color: var(--very-light-pink);
                }
                &:nth-child(2) {
                    margin-top: 0;
                    margin-bottom: 36px;
                    font-size: var(--sm);
                    color: var(--very-light-pink);
                }
            }

            button {
                // Primary Button
                height: 50px;
                width: 100%;
                font-size: var(--md);
                font-weight: bold;
                color: var(--white);
                background-color: var(--hospital-green);
                border: none;
                border-radius: 8px;
                cursor: pointer;
                //add to card button
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`