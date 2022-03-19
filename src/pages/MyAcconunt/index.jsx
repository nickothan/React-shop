//* import styles
import { Container } from "./styles"

const MyAccount = () => {
    return(
        <Container>
            <div >
                <h1 >My account</h1>

                <form action="/" >
                    <div>
                        <label for="name" >Name</label>
                        <p >Camila Yokoo</p>

                        <label for="email" >Email</label>
                        <p class="value">camilayokoo@gmail.com</p>

                        <label for="password" class="label">Password</label>
                        <p >*********</p>
                    </div>

                    <input type="submit" value="Edit" />
                </form>
            </div>
        </Container>
    )
}

export default MyAccount