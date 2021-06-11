import React, { useEffect, useContext } from "react";
import Logo from '../../assets/images/logo-surf-city.png'
import {DataContext} from '../../context/context'
import List from '../list'
import './index.scss'
import Surf from '../../assets/images/surf.jpg'

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
        <img src={Surf} alt="Surf" className="liquid"/>
        <div className=" basic-p" style={{marginTop: '1rem'}}>
          {
           lang === 'es' ? (<div>
              <div className="intro-title"> Bienvenido </div>
              <div>Al Buscador de Olas </div>
            <p>Las playas de El Salvador son el lugar perfecto para hacer surf 🏄. <br />Gracias a nuestra privilegiada geografía contamos con los mejores spots para los amantes de las olas 🤙</p>
            <p>En este buscador hemos agrupado nuestras playas según las clasificaciones que los expertos usan, como el tipo de ola, dirección, características de la playa etc, estos criterios los encontrarás en el menú de la izquierda</p>
          </div>) : (
            <div>
              <div className="intro-title"> Welcome </div>
              <div>to the Wave Searcher </div>
             <p> The beaches of El Salvador are the perfect place to surf 🏄. <br /> Thanks to our privileged geography we have the best spots for wave lovers 🤙 </p>
             <p> In this search we have grouped our beaches according to the classifications that the experts use, such as the type of wave, direction, type of the beach, etc., these criteria can be found in the menu on the left </p>
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