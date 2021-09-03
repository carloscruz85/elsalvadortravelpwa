import React, {useEffect, useState} from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import Section from './views/section';
import List from './views/list'
import Destination from './views/destination'
import Search from './views/search'
import Clear from './views/clear'
import Service from './views/service'
import Experience from 'views/experience'
import DataProvider from './context/context'
import Loader from './components/loader'
import axios from 'axios'
// import Menu from './components/menu';
import Bar from './components/bar'
import Container from '@material-ui/core/Container';
import About from "views/about";
import Biosecurity from "views/biosecurity";

// import { QueryClient, QueryClientProvider, useQuery } from "react-query";


// import ErrorBoundary from './boundaries'

// import SaveInContext from './logic/saveInContext'

function App() {
  const [loader, setLoader] = useState( {
    show: true,
    msg: ''
  } )



  const [go, setGo] = useState( false )

  useEffect(() => {

    // console.log('in router');
    const data = window.localStorage.getItem('ws-data')
    if( data === null ){
      // setLoader({ ...loader, show: true })
      axios
    .get('https://elsalvador.travel/wp-json/ccruz85/v2/estpwa/')
      .then(function (response) {
        // console.log(response.data);
        window.localStorage.setItem('ws-data', JSON.stringify(response.data));
        window.localStorage.setItem('ws-lang', 'es');
        // setLoader({ ...loader, show: false })
        setGo(true)
      })
      .catch(function (error) {
        console.log(error)
        setLoader({ ...loader, msg: ''+error })
      })
    }else{
      setGo(true)
    }
    // pass localstorage to context
    

  }, [loader]);
  // SaveInContext('data in')
  // const { data, dispatch } = useContext(DataContext)
  return (
    <Router>
      {
        go ? 
        
        <Switch>
          <DataProvider>
          <Bar />
          <Container maxWidth="xl">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/biosecurity" component={Biosecurity} />
            <Route exact path="/section/:section" component={Section} />
            <Route exact path="/list/" component={List} />
            <Route exact path="/destination/:destination" component={Destination} />
            <Route exact path="/service/:service" component={Service} />
            <Route exact path="/experience/:experience" component={Experience} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/clear" component={Clear} />
           
            </Container>
          </DataProvider>
        </Switch>
      : <Loader msg={loader.msg}/>
      }
      
    </Router>
  );
}

export default App;
