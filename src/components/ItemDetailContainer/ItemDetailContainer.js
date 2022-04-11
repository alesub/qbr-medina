import { Container } from "@mui/material"
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncmock'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(apiProduct => {
            setProduct(apiProduct)
        })
    }, [productId])

    return(
        <Container className="MainContainer" maxWidth="lg" sx={{ boxShadow: 3 }}>
            <ItemDetail {...product} />
        </Container>
    )

}

export default ItemDetailContainer