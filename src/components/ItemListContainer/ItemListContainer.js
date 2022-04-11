import { Container, Typography } from "@mui/material"
import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from 'react'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return (
        <Container className="MainContainer" maxWidth="lg" sx={{ boxShadow: 3 }}>
            <div className="ItemListContainer">
                <Typography variant="h4" component="h2" marginBottom={3}>
                    Remeras Destacadas
                </Typography>
                <ItemList products={products} />
            </div>
        </Container>
    )
}

export default ItemListContainer