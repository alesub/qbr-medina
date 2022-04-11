import ItemCount from "../ItemCount/ItemCount"
import { Typography } from "@mui/material"
import "./ItemDetail.scss"

const ItemDetail = ({ name, img, price, stock, description}) => {

    const handleOnAdd = (count) => {
        console.log('items added to cart: '+count)
    }

    return(
        <div className="ItemDetail">
            <div className="images">
                <img src={img} alt="{name}" />
            </div>
            <div className="description">
                <Typography gutterBottom variant="h3" component="div">{name}</Typography>
                <Typography variant="h6" color="text.secondary">${price}</Typography>
                <Typography variant="body2" marginBottom={2}>{description}</Typography>
                <Typography variant="body2" marginBottom={5}>Sólo {stock} disponibles!</Typography>

                {stock > 0 ? <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}  /> : ''}
            </div>
        </div>
    )
}

export default ItemDetail