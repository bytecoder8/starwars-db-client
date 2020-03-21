import React, { Component } from 'react'
import ItemList from '../../components/ItemList'
import ItemDetails, { Record } from '../../components/ItemDetails'
import withApiService from '../../hocs/withApiService'
import Row from '../../components/Row'
import ErrorBoundary from '../../components/ErrorBoundary'


const ShipDetails = withApiService({
  getData: 'getShip'
})(ItemDetails)

const ShipList = withApiService({
  getData: 'getAllShips'
})(ItemList)

class Starships extends Component {
  state = {
    starshipId: 1
  }

  selectStarship = (id) => {
    this.setState({
      starshipId: id
    })
  }

  render() {
    const { starshipId } = this.state

    const list = 
      <ShipList
        selectedItemId={ starshipId }
        onItemSelected={ this.selectStarship }
        renderItem={ (item) => item.name }
      />

    const details =
      <ShipDetails itemId={ starshipId }>
        <Record field="name" label="Name" />
      </ShipDetails>

    return (
      <div className="starships-page">
        <h2 className="mt-4">Starships</h2>
        <ErrorBoundary>
          <Row left={ list } right={ details } />
        </ErrorBoundary>
      </div>
    )
  }
}

export default Starships
