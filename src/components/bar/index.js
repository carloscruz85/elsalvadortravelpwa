import React, { useEffect } from 'react';
import './index.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import BasicButton from '../../logic/basic-button' 
import MenuItem from '@material-ui/core/MenuItem';
//store
import { useStore } from '../../store/store'

//menu
import Menu from '@material-ui/core/Menu';
import TranslateIcon from '@material-ui/icons/Translate';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Bar() {
  const { data, terms, setData, setTerms, setDestinations, setLang, setServices, setExperiences } = useStore();
  //data

  useEffect(() => {
    // console.log([]);
    // console.log(data, terms);
    const dataLocal = JSON.parse(window.localStorage.getItem('ws-data'))
    if (data.length === 0) {
      // console.log('no data',dataLocal)
      setData(dataLocal)
      setTerms(Object.entries(dataLocal.terms))
      // console.log(dataLocal.destinations);
      setDestinations( Object.entries(dataLocal.destinations).reduce( (a,c) => {  
        a.push(c[1])
        return a
      },[] ) )

      setExperiences( Object.entries(dataLocal.experiences).reduce( (a,c) => {  
        a.push(c[1])
        return a
      },[] ) )

      setServices( Object.entries(dataLocal.services).reduce( (a,c) => { 
        const data = c[1] 
        data.id=parseInt(c[0])
        a.push(c[1])
        return a
      },[] ) )

    }
  }, [data.length, setData, setTerms, setDestinations, setServices, setExperiences])

  // menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    //lang
    const [menuAnchor, setMenuAnchor] = React.useState(null);
    const openLanguageMenu = (event) => {
      setMenuAnchor( event.currentTarget )
    }
  
    const handleMenuClose = () => {
      setMenuAnchor(null);
    };

    const langCtrl = (lang) => {
      handleMenuClose()
      setLang(lang)
    }

  // menu styles
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open menu"
            aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className="bar-menu"
          >
            {
              terms.map((term, iimg) => {
                return (
                  <MenuItem onClick={()=>handleClose()} key={iimg}> <BasicButton term={term[1]} /> </MenuItem>
                )
              })
               
            }
          </Menu>
          <Typography className={classes.title} variant="h6" noWrap>
            El Salvador
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton aria-label="Language" edge="end" color="inherit" 
           aria-controls="lang-menu" aria-haspopup="true" onClick={openLanguageMenu}
           >
            <TranslateIcon />
          </IconButton>
          <Menu
            id="lang-menu"
            anchorEl={menuAnchor}
            keepMounted
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
            className="lang-menu"
          >
            <MenuItem onClick={()=>langCtrl('es')}> Español </MenuItem>
            <MenuItem onClick={()=>langCtrl('en')}> English </MenuItem>

          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}



