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
// import Translate from 'logic/translate';
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
    const classes = useStyles();
    const { experiences, destinations, lang, services } = useStore()
    const field = useRef(null)
    const [dialog, setDialog] = useState(
        {
            title: '',
            msg: '',
            show: false,
            close: ''
        }
    )
    const [results, setResults] = useState([])
    // const [innerHint, setInnerHint] = useState('')
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchTerm, setSearchTerm] = useState('')

    // const handleClick = (el) => {
    //     setAnchorEl(el);
    // };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        // console.log(`searchTerm change: ${searchTerm}`);
        const delayDebounceFn = setTimeout(() => {
            // search(searchTerm)
            if (searchTerm.length){
                // console.log(`searchTerm length make sense: ${searchTerm.length}`);

                const innerResults = destinations.concat(experiences.concat(services))
                .filter(d => {
                    // console.log(Slugify(d['title-en']).includes( Slugify(hint) ));
                    if (
                        Slugify(d['title-en']).includes(Slugify(searchTerm))
                    ) return d;
                    else return null
                })

                // console.log(innerResults);
                if(!innerResults.length){
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
                }else{
                    setResults(innerResults)
                }

                
            }
           
        }, 1000)

        return () => clearTimeout(delayDebounceFn)
    }, [lang, searchTerm, destinations, experiences, services])


    useEffect(() => {
        if(results.length) setAnchorEl(props.container.current); // show menu
 
    }, [results, props.container])


    const clearInput = () => {
        if( field ) field.current.value = ''
    }

    // const manageClick = () => {
    //     // console.log(`Manage Click on input`);
    //     if(results.length) setAnchorEl(props.container.current); // show menu
    // }

    // const msgBase = {
    //     destination: 'Destination',
    //     food: 'Food',
    //     lodging: 'Lodging',
    //     experience: 'Experience'
    // }

    // const [msg, setMsg] = useState(msgBase)
    
    // useEffect(() => {
    //     switch (lang) {
    //         case 'es':
    //             setMsg({
    //                 destination: 'Destinos',
    //                 food: 'Alimentación',
    //                 lodging: 'Hospedaje',
    //                 experience: 'Experiencias'
    //             })
    //             break;
        
    //         default:
    //             setMsg(
    //                 msgBase
    //             )
    //             break;
    //     }
    // }, [lang])

    return (
        <div className={classes.search} >
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                // onClick={() => { manageClick() }}
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
                {/* {
                    results.length > 0 ? 
                    <MenuItem>
                        <b>{msg.destination}</b>
                    </MenuItem> : null
                } */}
                {
                    results?.map((destination, i) =>
                        <MenuItem key={`${destination.id}_${i}`} onClick={() => { clearInput(); handleClose() }}>
                            <Link to={`/${destination['type']}/${Slugify(destination['title-en'])}`} dangerouslySetInnerHTML={{
                                __html: `${destination['title-en']}`
                            }}>
                            </Link>
                        </MenuItem>)
                }
            </Menu>
            <Dialog show={dialog.show} title={dialog.title} msg={dialog.msg} close={dialog.close} f={setDialog} clear={clearInput}/>
        </div>

    );
}


