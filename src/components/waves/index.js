import React, {useState, useEffect, useContext} from 'react'
import './index.scss'
import {DataContext} from '../../context/context'

const Waves = (props) => {
    const {globalData} = useContext(DataContext)
    const [cat, setCat] = useState([])
    const {terms} = props
    useEffect(() => {
        // console.log(globalData.terms, terms);
        setCat( Object.entries( globalData.terms ) )
    }, [globalData])

    const waves = [1,2,3,4,5,6,7,8,9,10,11]
    // const time = 3

    // console.log(globalData);
    // console.clear() 
    return (
        <>
       <div className="barras">
            {waves.map( (b,i)=>{
                // console.log(i*3/waves.length);
                return (
                    <div className="barra" key={i} style={{ animation: `MoveUpDown 2s linear ${i*3/waves.length}s infinite` }}></div>
                )
            } )}

           
        </div>
        <div className="numbers">
        {waves.map( (w,i)=>{ return (
                    <b key={i}>{w - 1}</b>
                ) } )}
        </div>
        <div className="terms">
            { cat.length > 0 ? cat.map( (t,i)=> {
                // console.log(t[1]);
                return (
                    <div classname="term" key={i}>
                        <div className="title-term">{t[1]['title-'+globalData.lang]}:</div>
                        <ul className="childs">
                            { terms.map( ( c, ci ) => {
                                    // console.log();
                                    if( t[1].id === c.parent ) {
                                        return (<li key={ci} className="child">{ t[1].childs[c.term_id][`title-${globalData.lang}`] }</li>)
                                    }else{
                                        return null
                                    }
                                
                            } ) }
                        </ul>
                    </div>
                )
            } ) : null }
        </div>
        </>
 
       
    )
}

export default Waves
