//* import styles
import { Container } from './styles'

//* import assets
import Arrow from '../../assets/icons/flechita.svg'

const Orders = () => {
    return (
        <Container >
            <div >
                <h1 >My orders</h1>

                <ul >
                    <li >
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                        <img src={Arrow} alt="arrow"/>
                    </li>

                    <li >
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                        <img src={Arrow} alt="arrow"/>
                    </li>

                    <li >
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                        <img src={Arrow} alt="arrow"/>
                    </li>

                    <li >
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                        <img src={Arrow} alt="arrow"/>
                    </li>
                </ul>
            </div>
        </Container>
    )
}

export default Orders