import React, {useContext} from 'react'
import { DataContext } from '../../context/context'
import Logo from '../../assets/images/logo-surf-city.png'
import {Link} from 'react-router-dom'
import './index.scss'

function List() {
    const { globalData } = useContext(DataContext)
    return (
        <div className="container">
            <div className="logo-container">
                <img src={Logo} className="logo" alt="Surf City" />
            </div>
            <div className="list">
                {
                    globalData.filtered.map( (destination, i) => {
                        // console.log(destination);
                        return (
                            <Link to={`/destination/${destination[1].title.replace( ' ', '_' ).toLowerCase()}`} className="destination" key={i}>
                                <div className="destination-title">{destination[1].title}</div>
    
                            </Link>
                        )
                    } )
                }
            </div>
        </div>
    )
}

export default List
