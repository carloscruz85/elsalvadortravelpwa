import React, { useEffect, useContext } from "react";
import Logo from '../../assets/images/logo.png'
import {DataContext} from '../../context/context'
import List from '../list'
import './index.scss'
// import Surf from '../../assets/images/surf.jpg'

const App = () => {

  const { globalData } = useContext(DataContext)
  const {lang} = globalData
  useEffect(() => {
   
    window.scrollTo(0, 0);
    
  }, []);
  // console.log(globalData.filtered.length);
  return (
    <>
      {globalData.filtered.length === 0 || globalData.filtered.length === undefined ?
      <div className="container intro" >
        <div className="logo-container">
          <img src={Logo} alt="Surf City" className="logo"/>
        </div>        
        {/* <img src={Surf} alt="Surf" className="liquid"/> */}
        <div className=" basic-p" style={{marginTop: '1rem'}}>
          {
           lang === 'es' ? (<div>
              <div className="intro-title"> Bienvenido </div>
         </div>) : (
            <div>
              <div className="intro-title"> Welcome </div>
          </div>
          )
          }
        </div>
    </div>
    : <List />
    }
    </>

  );
};

export default App;