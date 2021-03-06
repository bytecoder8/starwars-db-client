import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/Home'
import PeoplePage from '../pages/People'
import PlanetsPage from '../pages/Planets'
import StarshipsPage from '../pages/Starships'
import ErrorPage from '../pages/ErrorPage'


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ HomePage } />
      <Route path="/planets/:id?" component={ PlanetsPage } />
      <Route path="/people/:id?" component={ PeoplePage } />
      <Route path="/starships/:id?" component={ StarshipsPage } />
      <Route path="*" component={ ErrorPage } />
    </Switch>
  )
}
