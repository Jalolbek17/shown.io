import React from 'react'

import Burger from "../../assets/icons/Burger"
import Str from "../../assets/icons/headerstr"


import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Portal,
} from '@chakra-ui/react'
// import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function Header() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (inOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(inOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__navb">
                        <div className="header__logos">
                            <div className="header__logo">
                                <Link to="/" >
                                    LOGO
                                </Link>
                            </div>
                            <nav className="header__nav">
                                <Box bgcolor={'inherit'} border={'none'}>
                                    <Menu>
                                        <MenuButton background={'inherit'} bgcolor={'inherit'} border={'none'} className="header__nav a"><span>Service<Str /></span> </MenuButton>
                                        <Portal>
                                            <MenuList className='header__menuit'>
                                                <Link to='google'><MenuItem className='header__menuitem'>Google ads</MenuItem> </Link>
                                                <Link to='facebook'> <MenuItem className='header__menuitem'>Facebook ads</MenuItem></Link>
                                                <Link to='insta'> <MenuItem className='header__menuitem'>Instagram ads</MenuItem></Link>
                                                <Link to='mcrs'><MenuItem className='header__menuitem'>Microsoft ads</MenuItem></Link>
                                            </MenuList>
                                        </Portal>
                                    </Menu>
                                </Box>
                                <a href="/">FAQs</a>
                            </nav>
                        </div>
                    </div>
                    <div className="header__buttons">
                       <Link to='dashboard'> <button className="header__button">
                            Get Started
                        </button></Link>
                        <div className="header__login">
                          <Link to='login'>  Log in</Link>
                        </div>
                    </div>
                    <Box className="header__burger" border={'none'}>
                        <Button borderLeft={'none'} variant="outlined" color="neutral" display={'none'} onClick={toggleDrawer(true)} className="header__burger"><Burger /></Button></Box>
                </div>
            </div>


            <Box >

                <Drawer open={open} onClose={toggleDrawer(false)}>
                    <Box
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                        paddingTop={'30px'}
                        fontSize={'20px'}

                    >
                        <Box className='header__servis'>Service:</Box>
                        <Box
                            fontSize={'20px'}
                            padding={'15px'}

                        >
                           <Link to='google'><ListItemButton>Google ads</ListItemButton></Link> 
                           <Link to='facebook'> <ListItemButton>Facebook ads</ListItemButton></Link>
                           <Link to='insta'>  <ListItemButton>Instagram ads</ListItemButton></Link>
                           <Link to='mcrs'> <ListItemButton>Microsoft ads</ListItemButton></Link>
                        </Box>
                        <Box className='header__serviss'>Pricing</Box>
                        <Box className='header__serviss'>FAQs</Box>
                        <Divider />
                        <div className="header__madalbtn">
                            <button className="header__button">
                                Get Started
                            </button>
                            <div className="header__btn2">
                                <button className="header__button">
                                    Log in
                                </button>
                            </div>
                        </div>

                    </Box>
                </Drawer>
            </Box>




        </header>
    )
}

export default Header