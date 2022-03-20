//* import assets
import BarMenu from 'assets/icons/icon_menu.svg'
import ImgLogo from 'assets/logos/logo_yard_sale.svg'
import ImgCar from 'assets/icons/icon_shopping_cart.svg'
import { useState } from 'react'

//* import styles
import { Container } from './styles.js'

//* import router
import { Link } from 'react-router-dom'
import Menushop from './_components/MenuShop/index.jsx'

const Header = () => {
    const [ toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
    console.log(toggle)
    return (
            <>
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
                    <li onClick={handleToggle}>platzi@example.com</li>
                    <li >
                    <img src={ImgCar} alt="shopping cart"/>
                    <div>2</div>
                    </li>
                </ul>
                </div>
            </nav>
        </Container>
                <Menushop toggle={toggle}/>
        </>
    )
}

export default Header