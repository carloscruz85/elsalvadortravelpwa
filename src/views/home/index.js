import React, { useEffect, useContext, useState } from "react";
import Logo from '../../assets/images/logo.png'
import { DataContext } from '../../context/context'
import List from '../list'
import './index.scss'
// import Surf from '../../assets/images/surf.jpg'
// import {useStore} from '../../store/store.js'
import { useStore } from 'store/store'

import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const App = () => {
  const { terms, lang } = useStore()
  const { globalData } = useContext(DataContext)
  // const {count} = useStore()
  // const {lang} = globalData
  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);

  const classes = useStyles();

  const [icons, setIcons] = useState([])
  useEffect(() => {
    setIcons(Object.entries(terms).reduce((ac, cu) => {
      // console.log(cu, ac);
      const accumulate = ac
      accumulate.push(cu[1][1])
      return ac
    }, []));
  }, [terms])


  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>

            {globalData.filtered.length === 0 || globalData.filtered.length === undefined ?
              <>
                <div className="logo-container">
                  <img src={Logo} alt="Surf City" className="logo" />
                </div>
              </>
              : <List />
            }

          </Grid>
          {
            icons.map((term, iimg) => {
              const img = require('../../assets/images/' + term.slug + '.png');
              return (
                <Grid container item key={iimg} sm={2} xs={6}>
                  <Link to={ term.id !== -1 ? '/section/' + term.slug : '/' + term.slug} className="icon-container">
                    <Avatar variant="square" alt={term['title-' + lang]} src={img['default']} className={classes.large} />
                    <Typography variant='h5' gutterBottom align='center'>
                      {term['title-' + lang]}
                    </Typography>
                  </Link>
                </Grid>
              )
            })

          }
        </Grid>
      </div>

    </>

  );
};

export default App;