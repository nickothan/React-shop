//* import styles
import { Container } from './styles'
//* import assets
import AddCart from 'assets/icons/bt_add_to_cart.svg'


const ProductItem = ({item}) => {
    
    return ( 
    <Container >
        <img src={item.images[0]} alt={item.ti}/>
        <div >
            <div>
                <p>$ {item.price},00</p>
                <p>{item.title}</p>
            </div>
            <figure >
                <img src={AddCart} alt=""/>
            </figure>
        </div>
    </Container>
    )
}

export default ProductItem