//* import assets
import BarMenu from 'assets/icons/icon_menu.svg'
import ImgLogo from 'assets/logos/logo_yard_sale.svg'
import ImgCar from 'assets/icons/icon_shopping_cart.svg'
//* import styles
import { Container } from './styles.js'
//* import router
import { Link } from 'react-router-dom'
//* import components
import Menushop from './_components/MenuShop/index.jsx'
import Myorder from 'containers/MyOrder'
//* import hooks
import { useState, useContext } from 'react'
import AddContext from 'context/AppContext'

const Header = () => {
    const [ toggle, setToggle] = useState(false)
    const [ toggleOrders, setToggleOrders] = useState(false)
    const { state } = useContext(AddContext)

    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleToggleOrder = () => {
        setToggleOrders(!toggleOrders)
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
                    <li onClick={handleToggleOrder}>
                    <img src={ImgCar} alt="shopping cart"/>
                    {state.cart?.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
                </div>
            </nav>
        </Container>
                <Menushop toggle={toggle}/>
                <Myorder toggle={toggleOrders}/>
        </>
    )
}

export default Header