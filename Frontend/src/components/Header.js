import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';

const pages = [{name:'Home', link: '/'}, {name:'Add Movie', link: '/addmovie'}, {name:'Search', link: '/search'}];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed"  sx={{ background: 'rgb(22, 21, 27)' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* mobile nav */}
                    <Avatar sx={{ m: 1, bgcolor: 'rgb(22, 21, 27)', display: { xs: 'none', md: 'flex' } }}>
                        <Link className='logo-link' to='/'>
                            <LiveTvRoundedIcon />
                        </Link>
                    </Avatar>
                    <Typography
                    variant="h6"
                    noWrap
                    // component="a"
                    // href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                    >
                        <Link className='logo-link' to='/'>
                            MOVIE
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                            display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <Link key={index} to={page.link}>
                                    <MenuItem sx={{color: 'black'}} onClick={handleCloseNavMenu}>
                                    {page.name}
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>

                    {/* desktop nav */}
                    <Avatar sx={{ m: 1, bgcolor: 'rgb(22, 21, 27)', display: { xs: 'flex', md: 'none' } }}>
                        <Link className='logo-link' to='/'>
                            <LiveTvRoundedIcon />
                        </Link>
                    </Avatar>
                    <Typography
                    variant="h5"
                    noWrap
                    // component="a"
                    // href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                    >
                        <Link className='logo-link' to='/'>
                            MOVIE
                        </Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <Link key={index} to={page.link}>
                                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} >
                                    {page.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
