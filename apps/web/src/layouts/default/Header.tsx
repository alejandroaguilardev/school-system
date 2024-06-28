import React, { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Divider, IconButton, useMediaQuery } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import ClassIcon from '@mui/icons-material/Class';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { paths } from '../../app/routes/paths';
import Link from '@mui/material/Link';
import { RouterLink } from '../../app/routes/components';


export default function HeaderSimple() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const renderLinks = () => (
        <>
            <Link component={RouterLink} href={paths.root} sx={{ display: 'flex', alignItems: 'center', color: theme.palette.text.primary }}>
                <HomeIcon sx={{ mr: 0.5 }} />
                Home
            </Link>
            <Link component={RouterLink} href={paths.students.root} sx={{ display: 'flex', alignItems: 'center', color: theme.palette.text.primary }}>
                <SchoolIcon sx={{ mr: 0.5 }} />
                Estudiantes
            </Link>
            <Link component={RouterLink} href={paths.teachers.root} sx={{ display: 'flex', alignItems: 'center', color: theme.palette.text.primary }}>
                <PersonIcon sx={{ mr: 0.5 }} />
                Profesores
            </Link>
            <Link component={RouterLink} href={paths.classrooms.root} sx={{ display: 'flex', alignItems: 'center', color: theme.palette.text.primary }}>
                <ClassIcon sx={{ mr: 0.5 }} />
                Clases
            </Link>
        </>
    );

    return (
        <AppBar position="static" sx={{ backgroundColor: theme.palette.background.paper, boxShadow: 'none', borderBottom: `1px solid ${theme.palette.divider}` }}>
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                    transition: theme.transitions.create(['height'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                    }),
                }}
            >
                <Link component={RouterLink} href={paths.root} sx={{ color: theme.palette.primary.main, textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    School
                </Link>
                {isMobile ? (
                    <>
                        <IconButton sx={{ background: "black" }} edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            {renderLinks().props.children.map((link: ReactNode, index: number) => (
                                <MenuItem key={index} onClick={handleMenuClose}>
                                    {link}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    <Stack direction="row" alignItems="center" spacing={3}>
                        {renderLinks()}
                    </Stack>
                )}
            </Toolbar>
            {!isMobile && <Divider />}
        </AppBar>
    );
}
