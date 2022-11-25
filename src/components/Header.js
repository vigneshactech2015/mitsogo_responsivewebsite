import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {RiHomeLine,RiBillLine} from "react-icons/ri";
import {BsFileBarGraph,BsSearch} from "react-icons/bs";
import {TbInbox } from "react-icons/tb";
import {MdOutlineListAlt,MdExpandMore,MdOutlineLogout,MdExpandLess} from "react-icons/md"
import {AiOutlineSetting,AiFillPlusCircle} from "react-icons/ai"
import {HiMenuAlt1} from "react-icons/hi";
import {FiUser} from "react-icons/fi";
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MainContent from './MainContent';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const settings = ['My Profile', 'Billing', 'Logout'];

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNotification,setAnchorElNotification]=React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenNotification = (event) => {
    setAnchorElNotification(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };  

  const handleCloseNotificationMenu=()=>{
    setAnchorElNotification(null);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="header_toolbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <HiMenuAlt1/>
          </IconButton>
        { open && <IconButton onClick={handleDrawerClose}>
          <HiMenuAlt1/>
          </IconButton>}
         <span className='search'><BsSearch/> Search transactions,invoices or help</span>
        
          {/* RIGHT PART */ }
          <span className='mobilesearch'><BsSearch/></span>
          <IconButton
          className="toolbar_right"
              size="small"
              aria-label="show 17 new notifications"
              color="white"
              onClick={handleOpenNotification}
            >
              <Badge size="small" overlap="circular" variant="dot" badgeContent={1} color="success">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Typography onClick={handleOpenUserMenu} className="username" variant="caption" display="block" noWrap gutterBottom>
            John Doe {anchorElUser?<MdExpandLess/>:<MdExpandMore/>}
          </Typography>
            <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
            <Avatar className="userimage" alt="Remy Sharp" src="../../userimage.jpg"/>
          </IconButton>
           {/* MENU STARTS */ }
          <Menu
          PaperProps={{  
            style: {  
              width: 180,  
            }
          }}  
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting,index) => (
            <MenuItem  key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">&nbsp;
              {index===0&&<FiUser/>}&nbsp;
              {index===1&&<RiBillLine/>}&nbsp;
              {index===2&&<MdOutlineLogout/>}&nbsp;
              {setting}</Typography>
            </MenuItem>
        ))}
        </Menu>
         {/* MENU ENDS */ }
          {/* NOTIFICATION MENU STARTS */ }
          <Menu
          PaperProps={{  
            style: {  
              width: 300,  
              height:210
            }
          }}  
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElNotification}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElNotification)}
          onClose={handleCloseNotificationMenu}
        >
        <div className="notification_container">
        <Avatar className="notification_container_image" alt="Remy Sharp" src="../../bavid.jpg"/>
        <div className="notification_container_name">
        <h6>Bavid Kames</h6>
        <p className="notification_container_image_message">Assigned you on the call with sara</p>
        </div> 
        <p className="notification_time">2 min ago </p> 
        </div>

        <div className="notification_container">
        <Avatar className="notification_container_image" alt="Remy Sharp" src="../../alexa.jpg"/>
        <div className="notification_container_name">
        <h6>Alexa Marry</h6>
        <p className="notification_container_image_message">Marked the task <span style={{color:"#6763E3"}}>New UI</span> as done</p>
        </div> 
        <p className="notification_time">5 min ago </p> 
        </div>

        <div className="notification_container">
         &nbsp;<Avatar className="notification_container_image" alt="Remy Sharp" src="../../eva.jpg"/>
        <div className="notification_container_name">
        <h6>Eva Maria</h6>
        <p className="notification_container_image_message">Added a new comment on Sales task</p>
        </div> 
        <p className="notification_time">10 min ago </p> 
        </div>
        <hr/>
        <p className="notification_showmore">Show More</p>
        </Menu>

           {/* NOTIFICATION MENU ENDS */ }
        </Toolbar>
      </AppBar>
      {/* DRAWER STARTS */ }
      <Drawer
      PaperProps={{
        sx: {
          height: 740,
          backgroundColor: "#43425D"
        }
      }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader style={{backgroundColor:"#3C3B54",color:"#FFFFFF"}}>
       <h3 className='header_logo'>ACME</h3>
        </DrawerHeader>
      <List style={{backgroundColor:"#43425D",color:"#FFFFFF",fontSize:"12px"}}>
          {['Home', 'Dashboard', 'Inbox', 'Products','Admin'].map((text, index) => (
            <ListItem key={text} className='list_item'>
              <ListItemButton>
                <ListItemIcon className="list_item_icons" style={{color:"#FFFFFF"}}>
                {index===0&&<RiHomeLine/>}
                {index===1&&<BsFileBarGraph/>}
                {index===2&&<><TbInbox/> <span className="new">New</span></>}
                {index===3&&<MdOutlineListAlt/>}
                {index===4&&<AiOutlineSetting/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
       {/* DRAWER ENDS */ }
      <Main className="mainbody" open={open}>
        <DrawerHeader />

        {/* MAIN CONTENT */ }
       <div className="maincontent_heading">
       <h3>Overview</h3>
       <Button size="medium" className="addfundbutton" variant="contained">Add Funds <span className="addfundicon"><AiFillPlusCircle/></span></Button>
       </div>
        {/* GRAPH */ }
       <MainContent/>
      </Main>
    </Box>
  );
}