import React from 'react';
import Box from '@material-ui/core/Box';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { useZoomNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/zoom';
import { makeStyles } from '@material-ui/core';


  function Nav() {
    const useStyles = makeStyles(theme => ({
        navBar: {
            background: 'black',
        }
    }));

    const classes = useStyles();

    return (
      <Box height={64} display={'flex'} className={classes.navBar}>
          <NavMenu useStyles={useZoomNavigationMenuStyles}>
            <NavItem>
              New Releases
            </NavItem>
            <NavItem>
              Men
            </NavItem>
            <NavItem>
              Women
            </NavItem>
            <NavItem>
              Kids
            </NavItem>
          </NavMenu>
      </Box>
    );
  }


export default Nav