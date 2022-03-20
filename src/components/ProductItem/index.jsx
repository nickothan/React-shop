//* import styles
import { Container } from './styles'
//* import assets
import AddCart from 'assets/icons/bt_add_to_cart.svg'
//*import context
import { useContext } from 'react'
import AddContext from 'context/AppContext'


const ProductItem = ({item}) => {
    const { addToCart } = useContext(AddContext)

    const handleClick = (product) => {
        addToCart(product)

        console.log(product)
    }
    
    return ( 
    <Container >
        <img src={item.images[0]} alt={item.ti}/>
        <div >
            <div>
                <p>$ {item.price},00</p>
                <p>{item.title}</p>
            </div>
            <figure onClick={() => handleClick(item)} >
                <img src={AddCart} alt=""/>
            </figure>
        </div>
    </Container>
    )
}

export default ProductItem