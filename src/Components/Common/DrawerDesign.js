import React from 'react';
import clsx from 'clsx';
import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  ChevronLeft,
  ChevronRight,
  MoveToInbox,
} from '@material-ui/icons';


const DrawerDesign = ({classes, open, setOpen, theme}) => (
    <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
        })}
        classes={{
        paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
        }),
        }}
    >
    <div className={classes.toolbar}>
      <IconButton onClick={() => setOpen(false)}>
        {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
      </IconButton>
    </div>
    <Divider />
    <List>
        <ListItem button key={1}>
          <ListItemText primary="22 Tue" />
        </ListItem>
    </List>
    <Divider />
    <List>
      {['All New', 'National', 'Global'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon><MoveToInbox /></ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);


export default DrawerDesign;