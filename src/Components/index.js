import React from 'react';
import {
  makeStyles,
  useTheme
} from '@material-ui/core/styles';
import {
  Container,
  Fab,
} from '@material-ui/core';
import {
  Error as KeyboardArrowUpIcon,
} from '@material-ui/icons';
import ScrollTop from './Common/ScrollTop';
import AppBarDesign from './Common/AppBarDesign';
import DrawerDesign from './Common/DrawerDesign';
import {drawerWidth} from '../Constants/constant';


const scrollDesign = (props) => (
  <ScrollTop {...props}>
    <Fab color="secondary" size="small">
      <KeyboardArrowUpIcon />
    </Fab>
  </ScrollTop>
);

const MainPage = ({ eachRoute, props }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    return (
      <div className={classes.root}>
        <AppBarDesign
          classes={classes}
          open={open}
          setOpen={setOpen}
        />
        <DrawerDesign
          classes={classes}
          setOpen={setOpen}
          open={open}
          theme={theme}
        />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container>
          <eachRoute.component props={{ ...props, eachRoute }} />
        </Container>
      </main>
      {scrollDesign([props])}
    </div>
    );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default MainPage;

