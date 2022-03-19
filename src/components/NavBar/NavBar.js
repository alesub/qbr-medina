import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CartWidget from '../CartWidget/CartWidget'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import './NavBar.scss'

const menuItems = ['Productos', 'Nosotros', 'Contacto'];

const NavBar = () => {
    return (
        <AppBar className="NavBar" position="static">
            <Container maxWidth="xl">
                <Toolbar className="toolbar" disableGutters>
                    <h1>QBR</h1>
                    <Box className="main-menu">
                        {menuItems.map((item) => (
                        <Button key={item}>
                            {item}
                        </Button>
                        ))}
                    </Box>
                    <CartWidget></CartWidget>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar