import React, { useRef, useContext, useState } from 'react'
import {DataContext} from '../../context/context'
import Slugify from '../../logic/slugify'
import './index.scss'
import Card from '../../components/card'

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
                            <Card title={destination[1].title} key={i}/>
                        )
                    } )
                }
            </div>
        </div>

        </>

    )
}

export default Search
