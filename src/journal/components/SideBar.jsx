import { useEffect, useState } from 'react';
import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { SideBarItem } from './';

export const SideBar = ({ drawerWidth = 240 }) => {
    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);
    
    // Estado para controlar si el drawer está abierto (en móviles)
    const [mobileOpen, setMobileOpen] = useState(false);
    
    // Función para manejar la apertura/cierre del drawer
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Exponer la función para que NavBar pueda usarla
    useEffect(() => {
        // Hacer disponible la función para el NavBar
        window.handleDrawerToggle = handleDrawerToggle;
    }, []);

    const drawerContent = (
        <>
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    {displayName}
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {notes.map(note => (
                    <SideBarItem key={note.id} {...note} />
                ))}
            </List>
        </>
    );

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            {/* Drawer para móviles */}
            <Drawer
                variant='temporary'
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                {drawerContent}
            </Drawer>

            {/* Drawer para pantallas más grandes */}
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                {drawerContent}
            </Drawer>
        </Box>
    );
};