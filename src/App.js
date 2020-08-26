import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home/index';
import Header from './components/Header/index';
import Hero from './components/Hero/index';
import Contact from './containers/Contact/index';
import Post from './containers/Post/index';
import About from './containers/About/index';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/post/:postId" component={Post}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    </Router>
  );
}

export default App;
