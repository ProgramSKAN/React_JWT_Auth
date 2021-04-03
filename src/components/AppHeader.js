import React from 'react';
import {
  AppBar,
  Tab,
  Tabs,
  MenuItem,
  IconButton,
  Menu,
  Toolbar,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

export const AppHeader = ({ tabValue }) => {
  const tabs = ['/books', '/favorite', '/book', '/users'];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = (event, newValue) => {
    console.log(newValue, tabs[newValue]);
    history.push(tabs[newValue]);
  };
  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onClickLogout = () => {};

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Tabs value={tabValue} onChange={handleClick}>
            <Tab label="Books" />
            <Tab label="Favorite" />
            <Tab label="Add Book" />
            <Tab label="Users" />
          </Tabs>
          <div style={{ flexGrow: 1 }} />
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={handleMenu}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>{localStorage.getItem('displayName')}</MenuItem>
            <MenuItem onClick={onClickLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};
