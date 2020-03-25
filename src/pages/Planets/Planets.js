import React, { Component } from 'react'
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


class Planets extends Component {
  state = {
    planetId: null
  }

  selectPlanet = (id) => {
    this.setState({
      planetId: id
    })
  }

  render() {
    const { planetId } = this.state

    const list = 
      <PlanetList
        selectedItemId={ planetId }
        onItemSelected={ this.selectPlanet }
      />

    const details =
      <PlanetDetails itemId={ planetId }>
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
}

export default Planets
