import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Translate from 'logic/translate'
import { useStore } from 'store/store'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Experience = (props) => {

    const { lang } = useStore()
    // console.log(props.experience);
    const classes = useStyles();
    return (
        <>
        <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
          component="img"
          alt={`${Translate([props.experience['title-en'], props.experience['title-es']])} - image`}
          height="140"
          image={props.experience.image}
          title= {Translate([props.experience['title-en'], props.experience['title-es']])}
        />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">

                    {Translate([props.experience['title-en'], props.experience['title-es']])}
                       
                    </Typography>
                    <Typography component="div" align="justify" dangerouslySetInnerHTML={{
                                __html: `${props.experience['content-' + lang]}`
                            }}></Typography>
                </CardContent>
            </CardActionArea>

        </Card>
        <Divider />
        </>
    )
}

export default Experience
