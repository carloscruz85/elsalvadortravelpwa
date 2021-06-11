import React, {useContext} from 'react'
import {DataContext} from '../../context/context'
import './index.scss'

const Services = (props) => {
    const { globalData } = useContext(DataContext)
    const servicesReceived = props.services.split(',');
    // console.log(globalData);
    const {services} = globalData
    // console.log(services);
    return (
        <div className="service-container">
            <div className="service-title">{props.title}</div>
            <div className="services">
            {
                services.map( (s, i) => {
              
                     if( servicesReceived.indexOf( s[0] ) !== -1 ){
                        //  console.log(servicesReceived, s[0]);
                        return ( 
                            <div key={i}>
                                <div className="service">
                                    <div className="title-service">{s[1].title}</div>
                                    <div className="address">{s[1].details.Address}</div>
                                    <div><a rel="noreferrer" target="_blank" href={`mailto:${s[1].details.mail}`}>{s[1].details.mail}</a></div>
                                    <div><a rel="noreferrer" target="_blank" href={`https://instagram.com/${s[1].details.instagram}`}>{s[1].details.instagram}</a>  </div>
                                    <div><a rel="noreferrer" target="_blank" href={`https://facebook.com/${s[1].details.facebook}`}>{s[1].details.facebook}</a>  </div>
                                    <div><a rel="noreferrer" target="_blank" href={`${s[1].details.web}`}>{s[1].details.web}</a>  </div>
                                </div>
                            </div>
                         )
                     }else{
                         return null
                     }
                } )
            }
            </div>
        </div>
    )
}

export default Services
