import React, {useContext, useEffect, useState} from 'react'
import basicButton from '../../logic/basic-button'
import './index.scss'
import { DataContext } from '../../context/context'
import {Link} from 'react-router-dom'
import House from '../../assets/images/house.png'
import Lupa from '../../assets/images/lupa.png'

function Menu() {
    const { globalData, dispatch, filtered } = useContext(DataContext)
    const [globalTerms, setGlobalTerms] = useState( [] )
    const {lang} = globalData
    // console.log(globalData);
  
    // const terms = Object.entries(dataLocal.terms)

    useEffect(() => {
        const dataLocal = JSON.parse(window.localStorage.getItem('ws-data'))
        if(globalData.data === null){
            dispatch({ type: 'ADD_DATA', data: dataLocal })
            // console.log(dataLocal);
        }
    if( globalData.terms )
        setGlobalTerms(Object.entries(globalData.terms))
    }, [ globalData, dispatch, filtered])

    // console.log(globalData);

    return (
        <div className="menu">
          <div onClick={ () => { dispatch({ type:'CHANGE_LANG' }) } } className=" text" >
                { lang === 'es' ? 'EN' : 'ES' }
            </div>
            <Link to={'/'} className="basic-button" >
                <img src={House} alt="home"/>
            </Link>
  
             {
            globalTerms.lenght !== 0 ?
            globalTerms
                .map( (term,iimg) => {
                    // console.log(term);
                    return basicButton(term,iimg)
                } )
                : null
            } 
            <Link to={'/search'} className="basic-button" >
                <img src={Lupa} alt="search"/>
            </Link>
        </div>
    )
}

export default Menu
