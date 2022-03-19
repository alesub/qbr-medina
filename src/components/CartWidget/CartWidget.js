import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"

const CartWidget = () => {
    return (
        <div className="CartWidget">
            <Badge badgeContent={1} color="primary">
                <ShoppingCart></ShoppingCart>
            </Badge>
        </div>
    )
}

export default CartWidget