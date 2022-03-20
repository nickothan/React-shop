import { useRef } from 'react'

//* import styles
import { Container } from './styles'

//* import assets
import Img from '../../assets/logos/logo_yard_sale.svg'

const Login = () => {
    const form = useRef(null)

    const handleSubmit = (event ) => {
        event.preventDefault();
        const formData = new FormData(form.current)
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }

        console.log("::data:: ",data)
    }

    return(
        <Container>
            <div >
                <img src={Img} alt="logo" />

                <form action="" ref={form} >
                    <label htmlFor="email" >Email address</label>
                    <input type="text" name="email" placeholder="platzi@example.cm"  />

                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" placeholder="*********"  />

                    <button   onClick={handleSubmit}  >Log in</button>
                    <a href="/">Forgot my password</a>
                </form>

                <button >Sign up</button>
            </div>
        </Container>
    )
}

export default Login