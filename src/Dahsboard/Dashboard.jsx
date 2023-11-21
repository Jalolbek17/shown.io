import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notificatons from './Content/Notifications/Notificatons'
import Credit from './Content/Credit/Credit'
import DashboardMenu from './Manu/DashboardMenu';
import Settings from './Content/Settings/Settings';
import Newcampain from './Content/Add/Newcampain';

// import Burger from "../../assets/icons/Burger";


// import Box from '@mui/joy/Box';
// import Drawer from '@mui/joy/Drawer';
// import Button from '@mui/joy/Button';
// import Divider from '@mui/joy/Divider';
// import ListItemButton from '@mui/joy/ListItemButton';
// import Burger from '../assets/icons/Burger';



const Dashboard = () => {
  return (
    <div id='mainn' className='dashboard'>
      <Routes>
          <Route path="/" element={<DashboardMenu/>} />
          <Route path="credit" element={<Credit/>} />
          <Route path="notifications" element={<Notificatons />} />
          <Route path="settings" element={<Settings/>} />
          <Route path="add" element={<Newcampain/>} />
      </Routes>

      {/* <Box className="header__burger" border={'none'}>
                        <Button borderLeft={'none'} variant="outlined" color="neutral" display={'none'} onClick={toggleDrawer(true)} className="header__burger"><Burger/></Button></Box>


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
</Box> */}
    </div>
  )
}

export default Dashboard