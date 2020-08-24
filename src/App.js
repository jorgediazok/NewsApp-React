import React from 'react';

import Home from './containers/Home/index';
import Header from './components/Header/index';
import Hero from './components/Hero/index';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Home />
    </div>
  );
}

export default App;
