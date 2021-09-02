import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStore } from 'store/store'
import Translate from 'logic/translate'

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

  const { services, experiences } = useStore()

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}> {Translate(['Food', 'Alimentación'])} </Typography>
          <Typography className={classes.secondaryHeading}>
            {Translate(['Where to eat?', '¿Dónde comer?'])}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>

          <div>
            {services.filter(service => props.food.split(",").includes(service.id.toString())).map((s) => <Service service={s} key={s.id} simple={false}/>)}
          </div>


        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            {Translate(['Lodging', 'Hospedaje'])}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            {Translate(['Where to sleep?', '¿Dónde dormir?'])}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>


          <div>
            {services.filter(service => props.lodging.split(",").includes(service.id.toString())).map((s) => <Service service={s} key={s.id} simple={false} />)}
          </div>

        </AccordionDetails>
      </Accordion>

      {experiences.lenght > 0 ? 
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.heading}>
                {Translate(['Experiences', 'Experiencias'])}
                </Typography>
              <Typography className={classes.secondaryHeading}>
                {Translate(['What to do?', '¿Qué hacer?'])}
              </Typography>
    
            </AccordionSummary>
            <AccordionDetails>
              <div style={{width: '100%'}}>
              {experiences.filter(service => { return props.experiences[0].split(",").includes(service.id.toString()) }).map((s) => <Experience experience={s} key={s.id} simple={true} />)}
              </div>
            </AccordionDetails>
          </Accordion>
      : null}



    </div>
  );
}
