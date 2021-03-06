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
    Menu as MenuIcon,
    ChromeReaderMode
} from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { get } from 'lodash';
import { useHistory } from 'react-router';

const MenuToolBar = ({ classes, setOpen, open, setModal }) => {
  const currentUser = useSelector(state => get(state, 'currentUser.data'));
  const history = useHistory();
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
          <Grid item xs={7}>
            <Typography variant="h4" className="headStyle w3-center" noWrap>
              NYtimes Edition
            </Typography>
          </Grid>
          <Grid item xs={3}>
            {currentUser ? (
              <Grid container>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Button variant="contained" onClick={() => history.push('/readlater')} startIcon={<ChromeReaderMode />} size="small">Read Later</Button>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
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
                </Grid>
              </Grid>
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