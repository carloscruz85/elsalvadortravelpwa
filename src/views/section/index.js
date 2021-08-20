import React, { useEffect, useState } from "react";
import './index.scss'
import { useStore } from '../../store/store'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//material
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';



const Section = (props) => {

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

  const { data, destinations } = useStore();
  const [localDestinations, setLocalDestinations] = useState([])


  useEffect(() => {
    window.scrollTo(0, 0);

    if (destinations.length > 0)
      setLocalDestinations(destinations.filter((d) => {
        let matches = 0;
        matches = d.terms.reduce((total, current) => {
          if (current.term_id === data.terms[props.match.params.section].id)
            return total + 1
          else {
            return total
          }
        }, 0);

        if (matches)
          return d
        else return null
      }))



  }, [destinations, props.match.params.section, data.terms]);

  // console.log(destinations);
  const classes = useStyles();
  return (
    <div className={classes.root}>


      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>{props.match.params.section}</h1>
          {/* <Link to={`/destination/${d[1].title.replaceAll( ' ', '_' ).toLowerCase()}`} className="destination" key={i}>
              <div  className="destination-title"
              dangerouslySetInnerHTML={{
              __html:  `${d[1].title}` 
              }}></div>              
          </Link> */}
        </Grid>
      </Grid>


      <List className={classes.root}>


        {
          localDestinations.map((d, i) => {
            console.log(d);
            return (
              <div key={i} >
                <ListItem  alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={d.title} src={d.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={  <div 
                    dangerouslySetInnerHTML={{
                    __html:  `${d.title}` 
                    }}></div>   }
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            )
          })
        }


      </List>



      {/* {  data.terms[props.match.params.section] ? 
        <div className="title">{ data.lang === 'en'  ?  data.terms[props.match.params.section]['title-en'] : data.terms[props.match.params.section]['title-es'] }</div> : null  }
<div className="list">
        {
          destinations.map( (d, i) => {
            return (
              <Link to={`/destination/${d[1].title.replace( ' ', '_' ).toLowerCase()}`} className="destination" key={i}>
              <div  className="destination-title"
              dangerouslySetInnerHTML={{
              __html:  `${d[1].title}` 
              }}></div>              
          </Link>
            )
          } )
        }
        </div> */}

    </div>
  );
};

export default Section;