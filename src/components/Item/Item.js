import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material"
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, stock}) => {
    return(
        <Card sx={{ maxWidth: 345, textAlign: 'center' }}>
            <CardActionArea component={Link} to={`/detail/${id}`}>
                <CardMedia
                    component="img"
                    height="300"
                    image={img}
                    alt="{name}"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                    <Typography variant="h6" color="text.secondary">${price}</Typography>
                    <Typography variant="body2">Sólo {stock} disponibles!</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Item