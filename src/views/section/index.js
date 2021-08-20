import React, { useEffect, useState } from "react";
import './index.scss'
import { useStore } from '../../store/store'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import slugify from 'logic/slugify'
import {Link} from 'react-router-dom'

//material
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

//utils 
import { stripTags } from '../../logic/utils'

//animations
// import {useSpring, animated} from 'react-spring'


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

  const { data, destinations, lang, terms } = useStore();
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

  const [titleSection, setTitleSection] = useState('Loading...')

  

  useEffect(() => {
    if (terms.length > 0) {
      setTitleSection(terms.reduce((a, c) => {
        if (c[0] === props.match.params.section) {
          a.push(c[1]['title-' + lang])
          return a
        } else {
          return a
        }
      }, []));
    }

  }, [terms, lang, props.match.params.section])

  //console.log(terms);
  const classes = useStyles();

  return (
    <div className={classes.root} >


      <Grid container spacing={3}>
        <Grid item xs={12}>
          
          <Typography variant="h3" component="h3" align="center">
            {titleSection}
          </Typography>
          <List className={classes.root}>
            {
              localDestinations.map((d, i) => {
                // console.log(d);
                return (
                  <div key={slugify(d['title-en'])} className="item-list"  style={ {animationDelay: `${i/5}s`} } >
                    <ListItem alignItems="flex-start" >
                      <ListItemAvatar>
                        <Avatar alt={d.title} src={d.image} variant="rounded" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={<div
                          dangerouslySetInnerHTML={{
                            __html: `${d['title-' + lang]}`
                          }}></div>}
                        secondary={
                          <React.Fragment>
                            {stripTags(d['content-' + lang]).substring(0, 75)}...

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
        </Grid>
      </Grid>
    </div>
  );
};

export default Section;