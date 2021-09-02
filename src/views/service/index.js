import React, { useState, useEffect } from 'react'
import { useStore } from 'store/store'
import slugify from 'logic/slugify'
import ServiceCompornent from 'components/service'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


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


const Service = (props) => {
    const { services } = useStore()
    const [service, setService] = useState(null)
    const classes = useStyles();
    useEffect(() => {
        if (services.length) {
            setService(services.find(d => slugify(d['title-en']) === props.match.params.service
            ));
        }
    }, [services, props.match.params.service])

    // useEffect(() => {
    //     console.log(service);
    // }, [service])

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    {
                        service ? <ServiceCompornent service={service} simple={true} /> : null
                    }
                </Grid>
            </Grid>


        </div>
    )
}

export default Service
