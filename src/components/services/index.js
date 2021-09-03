import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStore } from 'store/store'
// import Translate from 'logic/translate'

import Service from 'components/service'
import Experience from 'components/experience';

// import ErrorBoundary from 'boundaries'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions(props) {

  const { services, experiences, lang } = useStore()

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [innerExperiences, setInnerExperiences] = useState([])
  const [innerFood, setInnerFood] = useState([])
  const [innerLodging, setInnerLodging] = useState([])

  useEffect(() => {
    //experiences
    setInnerExperiences(
      experiences.filter(
        service => {
          return props.experiences[0].split(",").includes(service.id.toString())
        
      }
    ));

    //food
    setInnerFood(
      services.filter(service => props.food.split(",").includes(service.id.toString()))
    );

    //lodging
    setInnerLodging(
      services.filter(service => props.lodging.split(",").includes(service.id.toString()))
    );

  }, [experiences, props.experiences, lang, props.food, props.lodging, services])

  const baseMsg =   {
    experience: {
      title: 'Experience',
      subTitle: 'What to do'
    },
    food: {
      title: 'Food',
      subTitle: 'Where to eat?'
    },
    lodging: {
      title: 'Lodging',
      subTitle: 'Where to sleep?'
    }
  }

  const [msg, setMsg] = useState(
    baseMsg
  )

  useEffect(() => {
    switch (lang) {
      case 'es':
        setMsg(
          {
            ...msg,
            experience: {
              title: 'Experiencia',
              subTitle: '¿Qué hacer?'
            },
            food:{
              title: 'Alimentación',
              subTitle: '¿Dónde comer?'
            },
            lodging: {
              title: 'Alojamiento',
              subTitle: '¿Dónde Dormir'
            }
          }
         )
        break;
    
      default:
        setMsg(
          msg
        )
        break;
    }
    
 
  }, [lang, msg])

  return (
    <div className={classes.root}>

      {
        innerFood.length ? 
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            {msg.food.title}
            </Typography>
          <Typography className={classes.secondaryHeading}>
            {msg.food.subTitle}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>

          <div>
            {innerFood.map((s) => <Service service={s} key={s.id} simple={false} />)}
          </div>


        </AccordionDetails>
      </Accordion>
      : null
      }

      {
        innerLodging.length ? 
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            {msg.lodging.title}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            {msg.lodging.subTitle}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>


          <div>
            {innerLodging.map((s) => <Service service={s} key={s.id} simple={false} />)}
          </div>

        </AccordionDetails>
      </Accordion>
        : null
      }

      {
        innerExperiences.length ?
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.heading}>
                {msg.experience.title}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                {msg.experience.subTitle}
              </Typography>

            </AccordionSummary>
            <AccordionDetails>
              <div style={{ width: '100%' }}>
                {innerExperiences.map((s) => <Experience experience={s} key={s.id} simple={true} />)}
              </div>
            </AccordionDetails>
          </Accordion>
          : null
      }
    </div>
  );
}
