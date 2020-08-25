import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home/index';
import Header from './components/Header/index';
import Hero from './components/Hero/index';
import Contact from './containers/Contact/index';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
      </div>
    </Router>
  );
}

export default App;
