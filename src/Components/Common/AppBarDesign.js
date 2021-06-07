import React from 'react';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Button
} from '@material-ui/core';
import {
    Menu as MenuIcon
} from '@material-ui/icons';

const MenuToolBar = ({ classes, setOpen, open, setModal }) => {
  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true) }
        edge="start"
        className={clsx(classes.menuButton, {
          [classes.hide]: open,
        })}
      >
        <MenuIcon />
      </IconButton>
      <Grid container>
          <Grid item xs={2}>
            1
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" className="headStyle w3-center" noWrap>
                Sunrise Edition
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button fullWidth size="large" color="secondary" variant="contained" onClick={() => setModal(true)}>Login</Button>
          </Grid>
      </Grid>
    </Toolbar>
  )};


const AppBarDesign = ({classes, open, setOpen, setModal }) => {
    return (
      <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          {MenuToolBar({classes, open, setOpen, setModal})}
        </AppBar>
    );
}


export default AppBarDesign;