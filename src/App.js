import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ApiContext from './context'
import Navbar from './components/Navbar'
import HomePage from './pages/Home'
import PlanetsPage from './pages/Planets'
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
        <Router>
          <div className="container">
            <Navbar onServiceChange={ this.toggleService } serviceName={ serviceName } />
            <Switch>
              <Route path="/" exact component={ HomePage } />
              <Route path="/planets" component={ PlanetsPage } />
              <Route path="/people" component={ PeoplePage } />
              <Route path="/starships" component={ StarshipsPage } />
            </Switch>
          </div>
        </Router>
      </ApiContext.Provider>
    );
  }
}

export default App;
