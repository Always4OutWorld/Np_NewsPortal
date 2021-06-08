import React from 'react';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Button,
  Avatar
} from '@material-ui/core';
import {
    Menu as MenuIcon
} from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { get } from 'lodash';

const MenuToolBar = ({ classes, setOpen, open, setModal }) => {
  const currentUser = useSelector(state => get(state, 'currentUser.data'))
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
          <Grid item xs={2}/>
          <Grid item xs={8}>
            <Typography variant="h4" className="headStyle w3-center" noWrap>
                Sunrise Edition
            </Typography>
          </Grid>
          <Grid item xs={2}>
            {currentUser ? (
              <a href="/profileView">
              <Grid container>
                <Grid item xs={12}>
                <Avatar className="w3-right" variant="square" style={{ backgroundColor: "red"}}>{get(currentUser, 'email').charAt(0)}</Avatar>
                </Grid>
                <Grid item xs={12}>
                <Typography className="w3-right" variant="body2">{get(currentUser, 'email').split('@')[0]}</Typography>
                </Grid>
              </Grid>
              </a>
            ) : (
              <Button fullWidth size="large" color="secondary" variant="contained" onClick={() => setModal(true)}>Login</Button>
            )}
          </Grid>
      </Grid>
    </Toolbar>
  )};


const AppBarDesign = ({classes, open, setOpen, setModal }) => {
    return (
      <AppBar
          position="fixed"
          style={{
            paddingTop: "10px"
          }}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          {MenuToolBar({classes, open, setOpen, setModal})}
        </AppBar>
    );
}


export default AppBarDesign;