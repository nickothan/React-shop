//* import styles
import { Container } from './styles'

const Login = () => {
    return(
        <Container>
            <div >
                <img src="./logos/logo_yard_sale.svg" alt="logo" />

                <form action="/" class="form">
                    <label for="email" >Email address</label>
                    <input type="text" id="email" placeholder="platzi@example.cm" class="input input-email" />

                    <label for="password" >Password</label>
                    <input type="password" id="password" placeholder="*********" class="input input-password" />

                    <input type="submit" value="Log in"  />
                    <a href="/">Forgot my password</a>
                </form>

                <button class="secondary-button signup-button">Sign up</button>
            </div>
        </Container>
    )
}

export default Login