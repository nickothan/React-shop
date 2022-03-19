//* import assets
import BarMenu from '../../assets/icons/icon_menu.svg'
import ImgLogo from '../../assets/logos/logo_yard_sale.svg'
import ImgCar from '../../assets/icons/icon_shopping_cart.svg'

//* import styles
import { Container } from './styles.js'

//* import router
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Container>
            <nav>
                <img src={BarMenu} alt="menu" />

                <div>
                    <img src={ImgLogo} alt="logo" />

                    <ul>
                        <li>
                            <Link to="" >All</Link>
                        </li>
                        <li>
                            <Link to="/" >Clothes</Link>
                        </li>
                        <li>
                            <Link to="/" >Electronics</Link>
                        </li>
                        <li>
                            <Link to="/" >Furnitures</Link>
                        </li>
                        <li>
                            <Link to="/" >Toys</Link>
                        </li>
                        <li>
                            <Link to="/">Others</Link>                        
                        </li>
                    </ul>
                </div>

                <div >
                <ul>
                    <li >platzi@example.com</li>
                    <li >
                    <img src={ImgCar} alt="shopping cart"/>
                    <div>2</div>
                    </li>
                </ul>
                </div>
            </nav>
        </Container>
    )
}

export default Header