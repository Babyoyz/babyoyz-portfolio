import { Navbar } from "./Components/Navbar";
import { BrowserRouter as  Route, Switch,Link } from 'react-router-dom'
import  Home from './Views/Home'
import About from "./Views/About";
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from 'react'
function App() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div>
        <Navbar />
        <Switch>
            <Route  path="/" exact>
                <Home/>
            </Route>
            <Route path="/About" exact>
                <About/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
