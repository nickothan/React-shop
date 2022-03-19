import React from "react";

//* Import styles
import { Container, Content } from './styles'

//* import Assets
import Img from '../../assets/logos/logo_yard_sale.svg'

const RecoveryPassword = () => {
    return(
    <Container>
        <Content>
            <img src={Img} alt="logo" />

            <h1 >Create a new password</h1>
            <p >Enter a new passwrd for yue account</p>

            <form action="/" >
                <label htmlFor="password" >Password</label>
                <input type="password" id="password" placeholder="*********" />

                <label htmlFor="new-password" >Password</label>
                <input type="password" id="new-password" placeholder="*********" />

                <input type="submit" value="Confirm" />
            </form>
        </Content>
    </Container>
    )
}

export default RecoveryPassword