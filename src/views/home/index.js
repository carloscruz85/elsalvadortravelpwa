import React, { useEffect, useContext } from "react";
import Logo from '../../assets/images/logo.png'
import {DataContext} from '../../context/context'
import List from '../list'
import './index.scss'
// import Surf from '../../assets/images/surf.jpg'
// import {useStore} from '../../store/store.js'


import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const { globalData } = useContext(DataContext)
  // const {count} = useStore()
  // const {lang} = globalData
  useEffect(() => {
   
    window.scrollTo(0, 0);
    
  }, []);

  const classes = useStyles();
  return (
    <>
     <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        
          {globalData.filtered.length === 0 || globalData.filtered.length === undefined ?
      <>
        <div className="logo-container">
          <img src={Logo} alt="Surf City" className="logo"/>
        </div> 
      </>
    : <List />
    }
    
        </Grid>
      </Grid>
    </div>

    </>

  );
};

export default App;