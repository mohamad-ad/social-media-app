import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
const SidebarItem = ({icon,text, switchButton, handleClick}) => {
  return (
    <Box>
        <List>
            <ListItem disablePadding>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                {text&& <ListItemText primary={text} />}
                {switchButton}
            </ListItemButton>
            </ListItem>
        </List>
    </Box>
  )
}

export default SidebarItem