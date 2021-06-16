import React, { useEffect, useContext, useState } from "react";
import './index.scss'
import { DataContext } from '../../context/context'
import Card from '../../components/card'

const Section = (props) => {
  
  const { globalData } = useContext(DataContext)
  // const [childs, setChilds] = useState( [] )
  const [destinations, setDestinations] = useState([])
  useEffect(() => {    
    window.scrollTo(0, 0);
    // console.log(globalData.terms[props.match.params.section]);
    // console.log(globalData.destinations[0]);

    setDestinations( globalData.destinations.filter( (d) => {
      // console.log(d[1].terms);
      let matches = 0;
      matches = d[1].terms.reduce( (total, current ) => {
        // console.log(current.term_id, globalData.terms[props.match.params.section].id);
        if( current.term_id === globalData.terms[props.match.params.section].id )
        return total + 1
        else{
          return total
        }
      }, 0 );

      // console.log('results',matches);
      if( matches )
      return d
      else return null
    } ) )

  }, [globalData, props.match.params.section]);

  // const data = JSON.parse(window.localStorage.getItem('ws-data'))
  // console.log(globalData.terms, childs);
  // const terms = Object.entries(data.terms[props.match.params.section].childs)

  // console.log(globalData.terms[props.match.params.section]);

  return (
    <div className="container">
        {  globalData.terms[props.match.params.section] ? 
        <div className="title">{ globalData.lang === 'en'  ?  globalData.terms[props.match.params.section]['title-en'] : globalData.terms[props.match.params.section]['title-es'] }</div> : null  }
<div className="list">
        {
          destinations.map( (d, i) => {
            return (
              <Card key={i} title={d[1].title} />
            )
          } )
        }
        </div>
        
    </div>
  );
};

export default Section;