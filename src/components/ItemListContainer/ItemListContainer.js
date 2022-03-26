import { Typography } from "@mui/material"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = () => {
    return (
        <div className="ItemListContainer">
            <Typography variant="h4" component="h2">
                Conocé nuestros productos
            </Typography>
            <ItemCount />
        </div>
    )
}

export default ItemListContainer