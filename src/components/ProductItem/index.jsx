//* import styles 
import { container } from './styles'
//* import assets
import CartPlus from '../../../assets/icons/bt_add_to_cart.svg'
import Close from '../../../assets/logo/icon_close.png'

const ProductItem = () => {
    return(
        <aside >
            <div >
                <img src={Close} alt="close"/>
            </div>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"/>
            <div >
                <p>$35,00</p>
                <p>Bike</p>
                <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                <button>
                    <img src={CartPlus} alt="add to cart"/>
                    Add to cart
                </button>
            </div>
        </aside>
    )
}

export default ProductItem