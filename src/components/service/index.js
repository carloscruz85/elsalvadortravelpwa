import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import translate from 'logic/translate'
import './index.scss'
import clearSocialMedia from 'logic/clearSocialMedia';
import RNT from 'assets/images/rnt.png'
import BIO from 'assets/images/bio.png'

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 140,

    },
});

const Service = (props) => {
    console.log(props.service);
    let img = 'https://elsalvador.travel/wp-content/themes/parallelus-go-explore-21/blueprint-parallelus/assets/img/enterprices.jpg'
    if (props.service.details.logo_empresa) img = `https://elsalvador.travel/wp-content/themes/parallelus-go-explore-21/assets/images/rnt/${props.service.details.logo_empresa}`
    const classes = useStyles();
    return (
        <div className='service-container'>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt={props.service.title}
                        height="140"
                        image={img}
                        title={props.service.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" dangerouslySetInnerHTML={{
                            __html: `${props.service.title}`
                        }}></Typography>
                        <div className="stamps">
                            {
                                parseInt(props.service.rnt) ? <img src={RNT} alt="RNT" /> : null
                            }
                            {
                                parseInt(props.service.bio) ? <img src={BIO} alt="Biosecurity" /> : null
                            }

                        </div>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.service.details.Address}
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {props.service.details.cel ? <Button size="small" color="primary">
                        <a href={`tel:${props.service.details.mail}`}>{translate(['Call', 'Llamar'])}</a>
                    </Button> : null
                    }
                    {props.service.details.mail ? <Button size="small" color="primary">
                        <a href={`mailto:${props.service.details.mail}`}>Email</a>
                    </Button> : null
                    }
                    {props.service.details.instagram ? <Button size="small" color="primary">
                        <a rel="noreferrer" target="_blank" href={clearSocialMedia('instagram', props.service.details.instagram)}>  Instagram</a>
                    </Button> : null
                    }

                    {props.service.details.facebook ? <Button size="small" color="primary">
                        <a rel="noreferrer" target="_blank" href={clearSocialMedia('facebook', props.service.details.facebook)}> Facebook</a>
                    </Button> : null
                    }
                </CardActions>
            </Card>
            <Divider />
        </div>
    )
}

export default Service
