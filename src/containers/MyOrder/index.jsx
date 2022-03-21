//*import styles
import { Container } from "./styles";
//* import components
import OrderItem from "components/OrderItem";
//* import context
import { useContext } from "react";
import AppContext from "context/AppContext";

const MyOrder = ({toggle}) => {
    const {state } = useContext(AppContext)

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => 
        accumulator + currentValue.price
        const sum = state.cart.reduce(reducer, 0)

        return sum
    }

    return(

        <Container toggle={toggle}>
                <div >
                    <h1 >My order</h1>

                    <ul>

                        {state.cart.map(item => <OrderItem key={`orderItem-${item.id}`} item={item} />)}
                        
                        <li >
                            <p>
                                <span>Total</span>
                                <span>6 articles</span>
                            </p>
                            <p>$ {sumTotal()}.00</p>
                        </li>                       
                    </ul>
                </div>
            
        </Container>
    )
    
}

export default MyOrder