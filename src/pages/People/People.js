import React from 'react'
import { withRouter } from 'react-router-dom'
import Row from '../../components/Row'
import ItemDetails, { Record } from '../../components/ItemDetails'
import ItemList from '../../components/ItemList'
import withApiService from '../../hocs/withApiService'
import withData from '../../hocs/withData'
import ErrorBoundary from '../../components/ErrorBoundary'
import './People.css'


const PersonDetails = withApiService({
  getData: 'getPerson'
})(ItemDetails)

const PeopleList = withApiService({
  getData: 'getAllPeople'
})(withData(ItemList))


const People = ( { match, history } ) => {
  const { id } = match.params

  const list = 
    <PeopleList
      selectedItemId={ id }
      onItemSelected={ id => history.push(id.toString()) }
      renderItem={ item => `${item.name}` }
    />

  const details = 
    <PersonDetails itemId={ id }>
      <Record field="height" label="Height" />
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birthyear" />
      <Record field="eyeColor" label="Eye Color" />
      <Record field="hairColor" label="Hair Color" />
    </PersonDetails>

  return (
    <div className="people-page">
      <h2 className="mt-4">People</h2>
      <ErrorBoundary>
        <Row left={ list } right={ details } />
      </ErrorBoundary>
    </div>
  )
}

export default withRouter(People)
