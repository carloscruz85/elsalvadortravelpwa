import React, { useRef, useContext, useState } from 'react'
import {DataContext} from '../../context/context'
import {Link} from 'react-router-dom'
import Slugify from '../../logic/slugify'
import './index.scss'

const Search = () => {

    const {globalData} = useContext(DataContext);
    const hint = useRef(null)
    const [results, setResults] = useState([])

    const search = (e) => {
        // console.log(hint.current.value);
        setResults( globalData.destinations.filter( (destination) => {
            // console.log( , Slugify( hint.current.value ));
            if( Slugify(destination[1].title).includes( Slugify( hint.current.value ) ))
            return destination
            else return null
        } ) )
    }

    // console.log(globalData.destinations);

    return (
        <>
        <div className="container search-container">
            <input ref={hint}  placeholder={ globalData.lang === 'en' ? 'Search' : 'Buscar' } onChange={ ()=>{search()} }/>
            <div className="list">
                {
                    results.map( (destination, i) => {
                        // console.log(destination);
                        return (
                            <Link to={`/destination/${destination[1].title.replace( ' ', '_' ).toLowerCase()}`} className="destination" key={i}>
                                <div className="destination-title">{destination[1].title}</div>
                                <div className="distance">12km</div>
                                <div className="temp">30°C / 80°F</div>
                            </Link>
                        )
                    } )
                }
            </div>
        </div>

        </>

    )
}

export default Search
