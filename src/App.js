import React, { useState, useEffect, createContext } from "react";
import { Switch, Route } from 'react-router-dom';
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

//import Single from './templates/Single';

export const wpDataContext = createContext();

function App() {



  const [menu] = useState(menuList)

  const [ wpPosts, setWpPosts] = useState([]);
  const [ wpPages, setWpPages ] = useState([]);
  const [ wpAcf, setWpAcf ] = useState([]);
  const [ wpMedia, setWpMedia] = useState([]);
  const [ wpEmbed, setWpEmbed] = useState([]);

  const findSpecificPost = (arrayOfFields, idNum) => {
    return (
      arrayOfFields.length && arrayOfFields.find(a => {
        return a.id === idNum && a;
      })
    )
  }

  useEffect(() => {
    (async () => {
      await fetch('http://localhost/skolka/wp-json/wp/v2/posts')
        .then(response => response.json())
        .then(resp => setWpPosts(resp))
        .then(
          fetch('http://localhost/skolka/wp-json/wp/v2/pages')
            .then(response => response.json())
            .then(resp => setWpPages(resp))
            .then(
              fetch('http://localhost/skolka/wp-json/acf/v3/pages')
                .then(response => response.json())
                .then(resp => setWpAcf(resp))
                  ).then(
                    fetch('http://localhost/skolka/wp-json/wp/v2/media')
                      .then(response => response.json())
                      .then(resp => setWpMedia(resp))
                    ).then(
                      fetch('http://localhost/skolka/wp-json/wp/v2/pages?_embed')
                        .then(response => response.json())
                        .then(resp => setWpEmbed(resp))
                    )
        );
    })();
  }, []);



  return (

    <wpDataContext.Provider value={{wpPosts: wpPosts, wpPages: wpPages, wpAcf: wpAcf, wpMedia: wpMedia, wpEmbed: wpEmbed, findSpecificPost: findSpecificPost}}>
      <div className="App">

        <Header />

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
                  <Route path="/ONas" component={ONas} />
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
    </wpDataContext.Provider>
  );
}

export default App;
