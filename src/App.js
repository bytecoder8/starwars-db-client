import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ApiContext from './context'
import Navbar from './components/Navbar'
import MockApiService from './services/MockApiService'
import SWApiService from './services/SWApiService'
import Routes from './components/Routes'


class App extends Component {
  state = {
    apiService: process.env.REACT_APP_API === 'mock'
                ? new MockApiService() : new SWApiService()
  }

  toggleService = () => {
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

    document.title = `Star Wars DB using ${serviceName} API`

    return (
      <ApiContext.Provider value={ apiService }>
        <Router basename={ process.env.PUBLIC_URL }>
          <div className="container">
            <Navbar onServiceChange={ this.toggleService } serviceName={ serviceName } />
            <Routes />
          </div>
        </Router>
      </ApiContext.Provider>
    );
  }
}

export default App;
