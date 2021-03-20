import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Nav}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
