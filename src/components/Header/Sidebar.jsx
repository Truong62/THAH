import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

/**
 *
 * @param visibleRight
 * @param setVisibleRight
 * @param activeLink
 * @returns {JSX.Element}
 * @constructor
 */
const SidebarContainer = ({ visibleRight, setVisibleRight, activeLink }) => {
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setVisibleRight(false)}
    >
      <List>
        {['Products', 'Pricing', 'Blogs', 'Company'].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              {/*@todo sau them icon sau*/}
              {/*<ListItemIcon>*/}
              {/*  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
              {/*</ListItemIcon>*/}
              <Link
                to={`/${text}`}
                className={`text-sm font-bold px-5 py-2 md:px-3 md:py-1 rounded-xl transition-all duration-500 hover:bg-[#A8DCE7] ${activeLink === '/products' ? 'bg-[#A8DCE7]' : ''}`}
              >
                {text}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <button className="flex items-center px-4 py-2 text-sm font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300">
              <Link to="/login">Log In</Link>
            </button>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <button className="flex items-center px-4 py-2 text-sm font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300">
              <Link to="/signup">Sign up</Link>
            </button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor="right"
        open={visibleRight}
        onClose={() => setVisibleRight(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default SidebarContainer;

SidebarContainer.propTypes = {
  setVisibleRight: PropTypes.func,
  visibleRight: PropTypes.bool,
  activeLink: PropTypes.bool,
};
