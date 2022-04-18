import { Navbar } from "./Components/Navbar";
import { BrowserRouter as  Route, Switch } from 'react-router-dom'
import  Home from './Views/Home'
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
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
