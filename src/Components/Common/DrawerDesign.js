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
} from '@material-ui/icons';
import { get } from 'lodash';
import moment from 'moment';


const DrawerDesign = ({
  classes,
  open,
  setOpen,
  theme,
  sectionData
}) => (
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
        {moment().format('DD MMM YY')}
        {theme.direction === 'rtl' ? <ChevronRight className="w3-margin-left" /> : <ChevronLeft className="w3-margin-left" />}
      </IconButton>
    </div>
    <Divider />
    <Divider />
    <List>
      {sectionData.map((each, id) => (
        <ListItem button key={id} onClick={each.onClick(each)}>
          <ListItemIcon>{each.icons}</ListItemIcon>
          <ListItemText primary={get(each, 'label')} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);


export default DrawerDesign;