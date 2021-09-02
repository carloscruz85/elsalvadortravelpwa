import React, { useState, useEffect, useRef } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Slugify from 'logic/slugify'
import Dialog from 'components/dialog'
import { Link } from 'react-router-dom'

import { useStore } from '../../store/store'
import Translate from 'logic/translate';
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
    const [dialog, setDialog] = useState(
        {
            title: '',
            msg: '',
            show: false,
            close: ''
        }
    )

    const [results, setResults] = useState([])
    const [innerHint, setInnerHint] = useState('')
    const { experiences, destinations, lang } = useStore()
    const field = useRef(null)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (el) => {
        setAnchorEl(el);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();

    const search = (hint) => {
        setInnerHint(hint)
        if( hint.length > 0 )
        setResults(destinations.concat(experiences)
            .filter(d => {
                // console.log(Slugify(d['title-en']).includes( Slugify(hint) ));
                if (
                    Slugify(d['title-en']).includes(Slugify(hint))
                ) return d
            })
        )
    }

    useEffect(() => {
        if (props.container.current) {
            if (results.length > 0) {
                handleClick(props.container.current)
            }
            else {
                if (innerHint.length > 0) {
                    switch (lang) {
                        case 'es':
                            setDialog({
                                title: `No hay resultados`,
                                msg: ``,
                                show: true,
                                close: 'Cerrar'
                            })
                            break;

                        default:
                            setDialog({
                                title: 'No results',
                                msg: ``,
                                show: true,
                                close: 'Close'
                            })
                            break;
                    }
                }


            }
        }
    }, [results])

    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            search(searchTerm)
        }, 1000)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])

    const manageClick = () => {
        
        if( field !== null ){
            // console.log(`Field: ${field.current.value}`);
            search(field.current.value)
        }
    }

    return (

        <div className={classes.search} >
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
            onClick={ ()=>{ manageClick() } }
                onChange={(e) => { setSearchTerm(e.target.value) }}
               
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                inputRef={field}
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
                    results?.map((destination, i) =>
                        <MenuItem key={`${destination.id}_${i}`} onClick={()=>{handleClose()}}>
                            <Link to={`/destination/${Slugify(destination['title-en'])}`} dangerouslySetInnerHTML={{
                                __html: `${destination['title-en']}`
                            }}>
                            </Link>
                        </MenuItem>)
                }
            </Menu>
            <Dialog show={dialog.show} title={dialog.title} msg={dialog.msg} close={dialog.close} f={setDialog} />
        </div>

    );
}


