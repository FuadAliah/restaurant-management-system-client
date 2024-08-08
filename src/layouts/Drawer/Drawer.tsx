import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AlignLeft, AlignRight, ArrowRightFromLine, Info, LayoutList, UtensilsCrossed } from 'lucide-react';
import { Tooltip } from '@mui/material';
import Logotype from '../../images/logotype';
import Logo from '../../images/Logo';

import './style.scss'

const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(10)} )`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  width: `calc(100% - ${theme.spacing(10)})`,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DrawerLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme();

  const [open, setOpen] = React.useState<boolean>(() => {
    const drawer = localStorage.getItem('drawer');
    return drawer !== null ? JSON.parse(drawer) : false;
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const listItems = [
    { icon: <LayoutList size={22} color={location.pathname === '/categories' ? theme.palette.primary.main : theme.palette.common.white} />, text: 'Categories', path: '/categories' },
    { icon: <UtensilsCrossed size={22} color={location.pathname === '/items' ? theme.palette.primary.main : theme.palette.common.white} />, text: 'Items', path: '/items' },
    { icon: <Info size={22} color={location.pathname === '/about-us' ? theme.palette.primary.main : theme.palette.common.white} />, text: 'About Us', path: '/about-us' }
  ]

  React.useEffect(() => {
    localStorage.setItem('drawer', JSON.stringify(open));
  }, [open]);

  return (
    <Box className="drawer">
      <CssBaseline />
      <AppBar className='app-bar' position="fixed" open={open} elevation={0}>

        <Toolbar>
          {open && (
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <AlignRight /> : <AlignLeft />}
              </IconButton>
            </DrawerHeader>
          )}

          <IconButton aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ marginRight: 5, ...(open && { display: 'none' }) }} >
            <ArrowRightFromLine />
          </IconButton>
        </Toolbar>

      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Box className="logo-container">
          {open ? <Logotype /> : <Logo />}
        </Box>
        <List className='list'>
          {listItems.map((item, index) => (
            <ListItem button key={index} onClick={() => navigate(item.path)} className={`item ${location.pathname.includes(item.path) ? 'active' : ''} ${open ? '' : 'closed'}`} >
              <Tooltip title={item.text} placement="right">
                <ListItemIcon className={`list-icon ${!open ? 'closed' : ''}`}>
                  {item.icon}
                </ListItemIcon>
              </Tooltip>
              {open && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box >
  );
}

export default DrawerLayout