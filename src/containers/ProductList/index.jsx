
//* import styles
import { Container } from "./styles";
//* import assets
import AddCart from 'assets/icons/bt_add_to_cart.svg'

const ItemsShop = () => {
    return(
        <Container >
            <ul >
        
            <li >
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                <div >
                    <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                    </div>
                    <figure >
                        <img src={AddCart} alt=""/>
                    </figure>
                </div>
            </li>
            </ul>
        </Container>
    )
}

export default ItemsShop