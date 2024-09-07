import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Accueil" />
        </ListItem>
        <ListItem button component={Link} to="/inventory">
          <ListItemIcon><InventoryIcon /></ListItemIcon>
          <ListItemText primary="Stock" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Paramètres" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
