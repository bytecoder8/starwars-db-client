import React, { Component } from 'react'
import ApiContext from './context'
import Navbar from './components/Navbar'
import RandomPlanet from './components/RandomPlanet'
import PeoplePage from './pages/People'
import StarshipsPage from './pages/Starships'
import MockApiService from './services/MockApiService'
import SWApiService from './services/SWApiService'


class App extends Component {
  render() {
    const apiService = process.env.REACT_APP_API === 'mock'
    ? new MockApiService() : new SWApiService()

    return (
      <ApiContext.Provider value={ apiService }>
        <div className="container">
          <Navbar />
          <h2>Random Planet</h2>
          <RandomPlanet />
          <PeoplePage />
          <StarshipsPage />
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
