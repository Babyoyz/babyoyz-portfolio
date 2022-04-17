import { Navbar } from "./Components/Navbar";
import { BrowserRouter as  Route, Switch } from 'react-router-dom'
import  Home from './Views/Home'

function App() {
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
