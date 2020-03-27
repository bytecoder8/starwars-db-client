import React from 'react'
import { withRouter } from "react-router-dom"
import ItemList from '../../components/ItemList'
import ItemDetails, { Record } from '../../components/ItemDetails'
import withApiService from '../../hocs/withApiService'
import withData from '../../hocs/withData'
import Row from '../../components/Row'
import ErrorBoundary from '../../components/ErrorBoundary'


const PlanetDetails = withApiService({
  getData: 'getPlanet'
})(ItemDetails)

const PlanetList = withApiService({
  getData: 'getAllPlanets'
})(withData(ItemList))


const Planets = ({ history, match } ) => {
  const { id } = match.params

  const list = 
    <PlanetList
      selectedItemId={ id }
      onItemSelected={ id => history.push(id.toString()) }
    />

  const details =
    <PlanetDetails itemId={ id }>
      <Record field="name" label="Name" />
      <Record field="diameter" label="Diameter" />
      <Record field="population" label="Population" />
    </PlanetDetails>

  return (
    <div className="planets-page">
      <h2 className="mt-4">Planets</h2>
      <ErrorBoundary>
        <Row left={ list } right={ details } />
      </ErrorBoundary>
    </div>
  )
}

export default withRouter(Planets)
