import React, { useState, useEffect } from 'react'
import './index.scss'
import Grid from '@material-ui/core/Grid';
import { useStore } from 'store/store'
import slugify from 'logic/slugify';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Services from 'components/services'

const Destination = (props) => {
    const { destinations } = useStore()
    const [destination, setDestination] = useState(null)
    const [carrousel, setCarrousel] = useState(null)
    const { lang } = useStore()
    useEffect(() => {
        if (destinations.length) {
            setDestination(destinations.find(d => slugify(d['title-en']) === props.match.params.destination
            ));
        }
    }, [destinations, props.match.params.destination])

    useEffect(() => {
        if (destination) {
            // console.log(destination);
            setCarrousel(destination.gallery.reduce((a, c) => { a.push(c.guid); return a }, [destination.image]));
        }
    }, [destination])

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                {
                    destination ?
                        <div>
                            <Typography variant="h3" component="h3" align="center" dangerouslySetInnerHTML={{
                                __html: `${destination['title-' + lang]}`
                            }}></Typography>
                            {
                                carrousel ?
                                    <Carousel>
                                        {
                                            carrousel.map((item, i) =>
                                                <Paper key="i">
                                                    <div className="img-container">
                                                        <img src={item} alt="img" className="gallery-item" />
                                                    </div>
                                                </Paper>)
                                        }
                                    </Carousel>
                                    : null
                            }

                            <Typography component="div" align="justify" dangerouslySetInnerHTML={{
                                __html: `${destination['content-' + lang]}`
                            }}></Typography>
                            <Services food={destination.food} lodging={destination.lodging} experiences={destination.experiences} />

                        </div>
                        : null
                }
            </Grid>
        </Grid>
    )
}

export default Destination
