import Item from '../Item/Item'
import { Grid } from "@mui/material"

const ItemList = ({products}) => {
    return (
        <Grid className="ItemList" container spacing={3}>
            {products.map(product => <Grid item xs={4}><Item key={product.id} {...product} /></Grid>)}
        </Grid>
    )
}

export default ItemList