//* import styles 
import { Container } from "./styles"

const Menushop = () => {
    return(
        <Container >
            <ul>
            <li>
                <a href="/" >My orders</a>
            </li>

            <li>
                <a href="/">My account</a>
            </li>

            <li>
                <a href="/">Sign out</a>
            </li>
            </ul>
        </Container>
    )
}

export default Menushop