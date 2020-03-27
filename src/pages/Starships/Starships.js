import React from 'react'
import { withRouter } from 'react-router-dom'
import ItemList from '../../components/ItemList'
import ItemDetails, { Record } from '../../components/ItemDetails'
import withApiService from '../../hocs/withApiService'
import withData from '../../hocs/withData'
import Row from '../../components/Row'
import ErrorBoundary from '../../components/ErrorBoundary'


const ShipDetails = withApiService({
  getData: 'getShip'
})(ItemDetails)

const ShipList = withApiService({
  getData: 'getAllShips'
})(withData(ItemList))


const Starships = ({ match, history }) => {

  const { id } = match.params

  const list = 
    <ShipList
      selectedItemId={ id }
      onItemSelected={ id => history.push(id.toString()) }
    />

  const details =
    <ShipDetails itemId={ id }>
      <Record field="model" label="Model" />
      <Record field="manufacturer" label="Manufacturer" />
      <Record field="class" label="Class" />
      <Record field="cost" label="Cost">
        { v => `${Number(v).toLocaleString()} credits` }
      </Record>
      <Record field="hyperdrive" label="Hyperdrive Rating" />
      <Record field="mglt" label="MGLT">
        {v => Number(v).toFixed(2) }
      </Record>
      <Record field="length" label="Length">
        { v => `${Number(v).toLocaleString()}m` }
      </Record>
      <Record field="cargo" label="Cargo Capacity">
        { v => `${Number(v).toLocaleString()} metric tons` }
      </Record>
      <Record field="crew" label="Minimum Crew">
        { v => Number(v).toLocaleString() }
      </Record>
      <Record field="passengers" label="Passengers">
        { v => Number(v).toLocaleString() }
      </Record>
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

export default withRouter(Starships)
