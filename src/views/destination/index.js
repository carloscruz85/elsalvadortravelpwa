import React, {useContext, useState} from 'react'
import { DataContext } from '../../context/context'
import './index.scss'
import Services from '../../components/services'
import Waves from '../../components/waves'
import StreetView from '../../components/streetview'
import StreetViewIcon from '../../assets/images/8.png'



const Destination = (props) => {
    const { globalData } = useContext(DataContext)
    const [option, setOption] = useState(1)
    const [position, setPosition] = useState(0)
     

    // console.log(globalData.destinations);    
    const { destinations, lang } = globalData
    // console.log(destinations.length);
    const options = [1,2,5,6]

    const move = (p)=>{
        // console.log(p);
        setPosition( position + p )
    }
    
    return (
        <div className="container">
            {
                destinations.length > 0 ? destinations.filter( destination => {
                    // console.log(destination[1].title);
                    
                    if( destination[1].title.replace( ' ', '_' ).toLowerCase() === props.match.params.destination )
                    return destination
                    else return null
                } ).map( (d,i) => {
                    // console.log(d[1]);
                    let gallery = Object.entries(d[1].gallery)
                    // console.log(gallery);
                    return (
                        <div className="destination" key={i}>

                        <div className="gallery">
                                    { position !== 0 ? <div className="left" onClick={ () => { move(-100) } }><i className="fa fa-angle-left"></i></div> : null }
                                    
                                    <div className="img-container" style={{left: `-${position}%`}}>
                                    <img className="gal-item" src={d[1].image} alt="img"/>
                                        { gallery.length > 0 ? gallery.map( (g, ig) => {
                                            // console.log();
                                            return (
                                                <img key={ig} src={g[1].guid} className="gal-item" alt="img" />
                                            )
                                        } ) : null }
                                    </div>
                                    
                                    { position === (gallery.length) * 100 ? null : <div className="right" onClick={ () => { move(100) } }><i className="fa fa-angle-right"></i></div> }

                                    
                                </div>                            
                            
                            <div className="title" >{d[1].title}</div>
                            <div className="options">

                                { options.map( (n,i)=>{
                
                                    let img = require('../../assets/images/'+n+'.png');
                                    // console.log(img);
                                    return (
                                        <div key={ i } onClick={ ()=>{ setOption(n) }} className="option">
                                            <img src={img['default']} alt={n}/>
                                        </div>
                                    )
                                } )}

                                { d[1].streetview.length > 0 ? <div onClick={ ()=>{ setOption(8) }} className="option">
                                            <img src={StreetViewIcon} alt="streetview"/>
                                        </div> : null}

                            </div>
     
                            { option === 1 ? <div
                            className="content basic-p"
                            dangerouslySetInnerHTML={{
                            __html:  `${d[1]['content-'+lang]}` 
                            }}></div> : null }
                            
                            { option === 2 ? <Services title="Lodging" services={d[1].lodging} /> : null }
                            { option === 5 ? <Services title="Restaurants" services={d[1].food} /> : null }
                            { option === 6 ? <Waves terms={d[1].terms} /> : null }
                            { option === 8 ? <StreetView streetview={d[1].streetview} /> : null }

                        </div>
                        
                    )
                } ) : null
            }
        </div>
    )
}

export default Destination
