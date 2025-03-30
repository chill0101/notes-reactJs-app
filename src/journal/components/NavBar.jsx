import { useDispatch } from 'react-redux';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { startLogout } from '../../store/auth';

export const NavBar = ({ drawerWidth = 240 }) => { //set props validation
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }

    const handleDrawerToggle = () => {
        // Llama a la función que definimos en el SideBar
        if (window.handleDrawerToggle) {
            window.handleDrawerToggle();
        }
    }

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap component='div'> JournalApp </Typography>

                    <IconButton
                        color='error'
                        onClick={onLogout}
                    >
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};