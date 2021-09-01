import React, {useState, useEffect} from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Slugify from 'logic/slugify'

import { useStore } from '../../store/store'
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

export default function Search(props) {
    const [results, setResults] = useState([])

    const {experiences, destinations} = useStore()

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (el) => {
        setAnchorEl(el);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const classes = useStyles();

    const search = (hint) => {
        
        setResults(destinations.concat(experiences)
        .filter( (d) => { if( Slugify(d['title-en']).includes( Slugify(hint) ) ) return d } ))
        
            
        
       
        if (hint.length > 0 && props.container.current && results.length > 0) {
            handleClick(props.container.current)
        }
    }

    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
        search(searchTerm)
      }, 1000)
  
      return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])

    return (

        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                onChange={(e) => { setSearchTerm(e.target.value)  }}
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
            <Menu
                id="results"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                disableAutoFocusItem={true}
            >
                {
                    results?.map( (destination,i) => <MenuItem key={`${destination.id}_${i}`} >{destination['title-en']}</MenuItem> )
                }
            </Menu>
        </div>

    );
}
