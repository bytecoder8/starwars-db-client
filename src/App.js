import React, { Component } from 'react'
import ApiContext from './context'
import Navbar from './components/Navbar'
import RandomPlanet from './components/RandomPlanet'
import PeoplePage from './pages/People'
import StarshipsPage from './pages/Starships'
import MockApiService from './services/MockApiService'
import SWApiService from './services/SWApiService'


class App extends Component {
  state = {
    apiService: process.env.REACT_APP_API === 'mock'
                ? new MockApiService() : new SWApiService()
  }

  toggleService = () => {
    console.log('clicked')
    this.setState( ({ apiService }) => {
      const Service = apiService instanceof SWApiService ? MockApiService : SWApiService
      return {
        apiService: new Service()
      }
    })
  }

  render() {
    const { apiService } = this.state
    const serviceName = apiService instanceof SWApiService ? 'Server' : 'Mock'

    return (
      <ApiContext.Provider value={ apiService }>
        <div className="container">
          <Navbar onServiceChange={ this.toggleService } serviceName={ serviceName } />
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
