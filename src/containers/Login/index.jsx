//* import styles
import { Container } from './styles'

//* import assets
import Img from '../../assets/logos/logo_yard_sale.svg'

const Login = () => {
    return(
        <Container>
            <div >
                <img src={Img} alt="logo" />

                <form action="/" >
                    <label htmlFor="email" >Email address</label>
                    <input type="text" id="email" placeholder="platzi@example.cm"  />

                    <label htmlFor="password" >Password</label>
                    <input type="password" id="password" placeholder="*********"  />

                    <input type="submit" value="Log in"  />
                    <a href="/">Forgot my password</a>
                </form>

                <button >Sign up</button>
            </div>
        </Container>
    )
}

export default Login