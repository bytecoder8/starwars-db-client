import React, { Component } from 'react'
import Row from '../../components/Row'
import ItemDetails, { Record } from '../../components/ItemDetails'
import ItemList from '../../components/ItemList'
import withApiService from '../../hocs/withApiService'
import './People.css'


const PersonDetails = withApiService(ItemDetails, {
  getData: 'getPerson'
})

const PeopleList = withApiService(ItemList, {
  getData: 'getAllPeople'
})

class People extends Component {
  state = {
    personId: 1
  }

  selectPerson = (id) => {
    this.setState({
      personId: id
    })
  }

  render() {
    const { personId } = this.state

    const list = 
      <PeopleList
        selectedItemId={ personId }
        onItemSelected={ this.selectPerson }
        renderItem={ item => `${item.name}` }
      />

    const details = 
      <PersonDetails itemId={ personId }>
        <Record field="height" label="Height" />
        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="Birthyear" />
        <Record field="eyeColor" label="Eye Color" />
        <Record field="hairColor" label="Hair Color" />
      </PersonDetails>

    return (
      <div className="people-page">
        <h2 className="mt-4">People</h2>
        <Row left={ list } right={ details } />
      </div>
    )
  }
}

export default People
