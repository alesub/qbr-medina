import { TextField } from "@mui/material"
import { AddCircle, RemoveCircle } from "@mui/icons-material"
import { useState } from "react"
import './ItemCount.scss'

const ItemCount = () => {
    const [quantity, setQuantity] = useState(1);

    const addQuantity = () => {
        setQuantity(quantity + 1)
    }

    const removeQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="ItemCount">
            <RemoveCircle fontSize="large" onClick={removeQuantity} />
            <TextField name="itemQuantity" className="itemQuantity" label="Cantidad" variant="outlined" value={quantity} />
            <AddCircle fontSize="large" onClick={addQuantity} />
        </div>
    )
}

export default ItemCount