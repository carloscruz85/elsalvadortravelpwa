import React, { useEffect, useContext, useState } from "react";
import './index.scss'
import { DataContext } from '../../context/context'
import {Link} from 'react-router-dom'

const Section = (props) => {
  
  const { globalData, dispatch } = useContext(DataContext)
  const [childs, setChilds] = useState( [] )
  const [destinations, setDestinations] = useState([])
  useEffect(() => {

    if( globalData.terms[props.match.params.section] ){
      setChilds(Object.entries(globalData.terms[props.match.params.section].childs))
      setDestinations(  globalData.filtered )
    }
    
    window.scrollTo(0, 0);
    
  }, [globalData, props.match.params.section]);

  // const data = JSON.parse(window.localStorage.getItem('ws-data'))
  // console.log(globalData.terms, childs);
  // const terms = Object.entries(data.terms[props.match.params.section].childs)

  // console.log(globalData.terms[props.match.params.section]);

  return (
    <div className="container">
        {  globalData.terms[props.match.params.section] ? 
        <div className="title">{ globalData.lang === 'en'  ?  globalData.terms[props.match.params.section]['title-en'] : globalData.terms[props.match.params.section]['title-es'] }</div> : null  }

        <div className="options">
          {
          childs.length !== 0 ?
          childs.map( (child, i) => {
            // console.log(child[1]);
            return(
              <div 
              className="option"
              key={i}
              onClick={  ()=> { dispatch({ type:'UPDATE_VALUE_TERMS', term: props.match.params.section, childId: child[0]  }) }}>
                { child[1].value ? <i className="fa fa-square"></i> : <i className="fa fa-square-o"></i> } {child[1]['title-'+globalData.lang]}
                </div>
            )
          } ): null }
        </div>
         { destinations.length ? <Link to='/list' className="button" >  { destinations.length } { globalData.lang === 'es' ? ' resultados, click para ver' : ' results click to see' }  </Link> : <div className="button">No results</div> }  
        
    </div>
  );
};

export default Section;