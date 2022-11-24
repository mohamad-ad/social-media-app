import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import React,{useState} from 'react'
import { Mail, Notifications } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent: 'space-between'
});

const Search = styled('div')(({theme}) => ({
  backgroundColor: 'white',
  padding:'0 10px',
  borderRadius: theme.shape.borderRadius,
  width:'40%'
}));

const Icons = styled('div')(({theme}) =>({
  display:'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]:{
    display:'flex'
  }
}));
const UserBox = styled('div')(({theme}) => ({
  display: 'flex',
  gap: '10px',
  alignItems:'center',
  [theme.breakpoints.up('sm')]:{
    display:'none'
  }

}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    
      <AppBar position='sticky'>
        <StyledToolbar>
          <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}> Title </Typography>
          <PetsIcon sx={{display:{xs:'block',sm:'none'}}} />

          <Search> 
            <InputBase placeholder='search...' color='text.primary' sx={{width:'100%'}}/>
          </Search>

          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail/>
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications/>
            </Badge>
            <Avatar onClick={()=>setOpen(true)} sx={{width:30,height:30}}/>
          </Icons>
          <UserBox onClick={()=>setOpen(true)}>
            <Typography variant='body2'> User Name</Typography>
            <Avatar sx={{width:30,height:30}}/>
          </UserBox>

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={()=>{setOpen(false)}}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            
          >
            <MenuItem onClick={()=>setOpen(false)} >Profile</MenuItem>
            <MenuItem onClick={()=>setOpen(false)} >My account</MenuItem>
            <MenuItem onClick={()=>setOpen(false)} >Logout</MenuItem>
          </Menu>
          
        </StyledToolbar>
      </AppBar>
    
  )
}

export default Navbar