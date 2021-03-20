import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './App.scss';

import menuList from './components/menu/menu.json';

import grass from './assets/grass/grass-transp-1920-smaller.png';


import Menu from './components/menu/Menu';
import Header from './components/header/Header'
import WelcomeScreen from './components/welcomeScreen/WelcomeScreen';

import ONas from './components/onas/ONas';
import SkJedalen from './components/skJedalen/SkJedalen';
import Aktuality from './components/aktuality/Aktuality';
import Fotogaleria from './components/fotogaleria/Fotogaleria';
import Rezim from './components/rezim/Rezim';
import Tlaciva from './components/tlaciva/Tlaciva';
import Kontakt from './components/kontakt/Kontakt';


import Footer from './components/footer/Footer';




function App() {



  const [menu] = useState(menuList)

  const loc = useLocation();

  /*const useFetch = url => {
    const [data, setData] = useState();

    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }

    useEffect(() => { fetchData() }, [url]);

    return data;
  };*/

  const [data, setData] = useState([]);



  useEffect(() => {
    (async () => {
      await fetch('http://localhost/skolka/wp-json/wp/v2/posts')
        .then(response => response.json())
        .then(resp => setData(resp));
    })();
  }, []);






  return (
    <div className="App">

      <Header />

      {data ? data.map( (d, i) => {
        return(
          <li key={i}>{d.title.rendered}</li>
        )
      } ) : null}

      <img src={grass}
        alt="trava"
        className="grass"
      />

      <Route render={({ location }) => (
        <>
          <Menu menu={menu} />


          <TransitionGroup>
            <CSSTransition
              timeout={1000}
              classNames='fade'
              key={location.pathname.split('/')[1]}>

              <Switch location={location}>
                <Route path="/" exact component={WelcomeScreen} />
                <Route path="/oNas" component={ONas} />
                <Route path="/skJedalen" component={SkJedalen} />
                <Route path="/aktuality" component={Aktuality} />
                <Route path="/fotogaleria" component={Fotogaleria} />
                <Route path="/rezim" component={Rezim} />
                <Route path="/tlaciva" component={Tlaciva} />
                <Route path="/kontakt" component={Kontakt} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>


        </>

      )} />

      <Footer />


    </div>
  );
}

export default App;
