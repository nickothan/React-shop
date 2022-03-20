//*import styles
import { Container } from "./styles";
//* import context
import { useContext } from "react";
import AppContext from "context/AppContext";

const MyOrder = ({toggle}) => {
    const {state } = useContext(AppContext)

    return(

        <Container toggle={toggle}>
                <div >
                    <h1 >My order</h1>

                    <ul>
                        <li >
                            <p>
                                <span>03.25.21</span>
                                <span>6 articles</span>
                            </p>
                            <p>$560.00</p>
                        </li>

                        {state.cart.map(item => <li >
                        <figure key={`orderItem-${item.id}`}>
                            <img src={item.images[0]} alt={item.title}/>
                        </figure>
                        <p>{item.title}</p>
                        <p>$ {item.price},00</p>
                        </li>)}

                       
                    </ul>
                </div>
            
        </Container>
    )
    
}

export default MyOrder