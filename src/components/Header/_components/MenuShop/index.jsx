//* import styles 
import { Container, Content } from "./styles"

const Menushop = ({toggle}) => {
    
    return(
        <Container toggle={toggle} >
            <Content toggle={toggle}>

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
            </Content>
        </Container>
    )
}

export default Menushop