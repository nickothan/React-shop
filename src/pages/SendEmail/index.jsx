//* import styles
import { Container, Content } from './styles'

const SendEmail = () => {

    return(
    <Container>
        <Content>
            <img src="./logos/logo_yard_sale.svg" alt="logo"  />

            <h1 >Email has been sent!</h1>
            <p >Please check your inbox for instructions on how to reset the password</p>

            <div >
                <img src="./icons/email.svg" alt="email" />
            </div>

            <button >Login</button>

            <p >
                <span>Didn't receive the email?</span>
                <a href="/">Resend</a>
            </p>
        </Content>
    </Container>
    )
}

export default SendEmail