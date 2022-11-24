import { Box, Switch } from '@mui/material'
import React from 'react'
import SidebarItem from './SidebarItem'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const Sidebar = ({setMode, mode}) => {
  const toggleDarkTheme = ()=>{
    setMode((prevMode) => prevMode==='light'?'dark':'light')
    
  }
  return (
    <Box  p={2} flex={1} sx={{display:{xs:'none', sm:'block'}}} >
      <Box position='fixed'>
        <SidebarItem icon={<HomeIcon/>} text='Home'/>
        <SidebarItem icon={<PersonAddAltIcon  />} text='Friends'/>
        <SidebarItem icon={<GroupIcon/>} text='Groups'/>
        <SidebarItem icon={<StarBorderIcon/>} text='Favorites'/>
        <SidebarItem icon={<ModeNightIcon/>} switchButton={<Switch/>}  handleClick={toggleDarkTheme} />
      </Box>
    </Box>
  )
}

export default Sidebar