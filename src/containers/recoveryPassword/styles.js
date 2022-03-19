import styled from "styled-components/macro";

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
        font-size: 18px;
        margin-bottom: 12px;
        text-align: center;
    }

    p{
        color: #C7C7C7;
        font-size: 16px;
        font-weight: 300;
        margin-top: 0;
        margin-bottom: 32px;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        
        label {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 4px;
        }
        
        input {
            background-color: #F7F7F7;
            border: none;
            border-radius: 8px;
            height: 30px;
            font-size: 16px;
            padding: 6px;
            margin-bottom: 12px;
        }
        
        input[type=submit] {
            width: 100%;
            height: 50px;
            background-color: #ACD9B2;
            color: #ffffff;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 8px;
            cursor: pointer;
        }
    }
`