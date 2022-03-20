import { useEffect, useState } from "react";
//* import styles
import { Container } from "./styles";
//*import components
import ProductItem from "components/ProductItem";


const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(data => {setProducts(data)})
    }, [])

    return(
        <Container >
            <ul >
                {products.map((item) => 
                    <ProductItem key={item.id} item={item} />
                )}
            </ul>
        </Container>
    )
}

export default ProductList