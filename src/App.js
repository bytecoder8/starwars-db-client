import React, { Component } from 'react';
import Navbar from './components/Navbar'
import RandomPlanet from './components/RandomPlanet'
import PeoplePage from './pages/People';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <h2>Random Planet</h2>
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}

export default App;
