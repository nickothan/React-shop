//* import styles
import { Container } from './styles'

const MyAccount = () => {

    return (
        <Container >
            <div >
                <h1 >My account</h1>

                <form action="/" >
                    <div>
                        <label for="name" >Name</label>
                        <input type="text" id="name" placeholder="Teff" />

                        <label for="email" class="label">Email</label>
                        <input type="text" id="email" placeholder="platzi@example.com" />

                        <label for="password" class="label">Password</label>
                        <input type="password" id="password" placeholder="*********" />
                    </div>

                    <input type="submit" value="Create" />
                </form>
            </div>
        </Container>
    )
}

export default MyAccount