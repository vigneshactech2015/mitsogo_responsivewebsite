import React from 'react'
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import {AiOutlineEdit,AiOutlineTwitter,AiFillLinkedin} from "react-icons/ai";
import {BsFacebook,BsWhatsapp} from "react-icons/bs";
import {FiMoreVertical} from "react-icons/fi"
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

function ProfileInfo() {
  return (
    <div>
    <StyledBadge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  badgeContent={
    <AiOutlineEdit/>
  }
  variant="dot"
  style={{marginTop:"20px"}}
>
<Avatar alt="Remy Sharp" sx={{ width: 70, height: 70 }} src="../../userimage.jpg"/>
</StyledBadge>
   <h4>Nick Herasimenka</h4>
   <p style={{marginTop:"-7px"}}>United States</p>
   <div>
   <AiOutlineTwitter/>
   <span className="facebook"><BsFacebook/></span>
   <span className="linkedin"><AiFillLinkedin/></span>
  <span className="whatsapp"><BsWhatsapp/></span> 
   </div>
   <hr/>
   <div className="profileinfo_subcontainer">
   <h4 style={{marginLeft:"15px"}}>Our Users</h4>
   <h3><FiMoreVertical/></h3>
   </div>
   {/*list of users subcontainer*/}

   <div className="users_container">
   <Avatar className="users_container_image" alt="Remy Sharp" src="../../drew.jpg"/>
   <div className="users_container_name">
   <h5>Drew James</h5>
   <p className="users_container_image_message">United States</p>
   </div> 
   <p className="users_time">Mob:8715674877 </p> 
   </div>

   <div className="users_container">
   <Avatar className="users_container_image" alt="Remy Sharp" src="../../bavid.jpg"/>
   <div className="users_container_name">
   <h5>Bavid Kames</h5>
   <p className="users_container_image_message">United States</p>
   </div> 
   <p className="users_time">Mob:8715674877</p> 
   </div>

   <div className="users_container">
   <Avatar className="users_container_image" alt="Remy Sharp" src="../../lavid.jpg"/>
   <div className="users_container_name">
   <h5>Lavid Emes</h5>
   <p className="users_container_image_message">United States</p>
   </div> 
   <p className="users_time">Mob:8715674877</p> 
   </div>



    </div>
  )
}

export default ProfileInfo