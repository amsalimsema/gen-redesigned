import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/shop' component={Shop}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
