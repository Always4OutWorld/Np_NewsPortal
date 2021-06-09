import React, { useState } from 'react';
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
  AccountBalance,
  AccountBalanceWallet,
  AcUnit,
} from '@material-ui/icons';
import ScrollTop from './Common/scrollTop';
import AppBarDesign from './Common/appBarDesign';
import DrawerDesign from './Common/drawerDesign';
import {drawerWidth} from '../constants/constant';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSections, getNewsData } from '../redux/action';
import { get, sample } from 'lodash';

const iconArray = [<AccountBalance/>, <AccountBalanceWallet />, <AcUnit />]


const scrollDesign = (props) => (
  <ScrollTop {...props}>
    <Fab color="secondary" size="small">
      <KeyboardArrowUpIcon />
    </Fab>
  </ScrollTop>
);

const MainPage = ({ eachRoute, props }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [isModal, setModal] = useState(false);
    const [section, setSection] = useState('all');

    useEffect(() => {
      if (!get(state, 'allSections.data')) {
        dispatch(getAllSections());
      }
    }, []);

    useEffect(() => {
      if (section && section !== 'all') {
        dispatch(getNewsData({}, section));
      }
    }, [section]);

    const sectionMenu = get(state, 'allSections.data.data.results', []).map(each => {
      return {
        label: get(each, 'display_name'),
        name: get(each, 'section').replace(' ', '_'),
        section: get(each, 'section'),
        onClick: (e) => {
          setSection(get(e, 'section'));
        },
        icons: sample(iconArray)
      };
    });

    return (
      <div className={classes.root}>
        <AppBarDesign
          classes={classes}
          open={open}
          setOpen={setOpen}
          setModal={setModal}
        />
        <DrawerDesign
          classes={classes}
          setOpen={setOpen}
          open={open}
          theme={theme}
          sectionData={sectionMenu}
        />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container>
          <eachRoute.component {...props} actionData={{isModal, setModal}} />
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

