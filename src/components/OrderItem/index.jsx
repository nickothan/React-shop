
//* import assets
import Close from'assets/icons/icon_close.png'
//* import styles
import { Container } from './styles'

const OrderItem = ({item}) => {
    return (
        <Container >
            <figure >
                <img src={item.images[0]} alt={item.title}/>
            </figure>
            <p>{item.title}</p>
            <p>$ {item.price},00</p>
            <img src={Close} alt="" />
        </Container>
    )
}

export default OrderItem