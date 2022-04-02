import { Typography } from "@mui/material"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = () => {
    const onAdd = (quantity) => {
        console.log(`Adding to cart ${quantity} products`)
    }
    return (
        <div className="ItemListContainer">
            <Typography variant="h4" component="h2">
                Conocé nuestros productos
            </Typography>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer