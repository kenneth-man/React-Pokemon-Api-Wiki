import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Cards from './components/Cards/Cards.js';
import Home from './components/Home/Home.js';
import Sets from './components/Sets/Sets.js';
import Types from './components/Types/Types.js';
import ApiDataContextProvider from './ApiDataContext.js';

function App() {
  return (
    <ApiDataContextProvider>
      <Router>
        <div className="app column">
          <Navbar/>

          <Switch>
            <Route exact path='/' component={Home}/>

            <Route exact path='/Cards' component={Cards}/>

            <Route exact path='/Sets' component={Sets}/>

            <Route exact path='/Types' component={Types}/>
          </Switch>
        </div>
      </Router>
    </ApiDataContextProvider>
  );
}

export default App;
