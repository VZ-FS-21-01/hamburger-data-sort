import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contacts from './components/Contacts';


function App() {
  return (

    <Router>
      <Nav />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <h1>ABOUT</h1>
        </Route>
        <Route path="/users">
          <h1>USERS</h1>
        </Route>
        <Route path="/">
          <Contacts />
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
