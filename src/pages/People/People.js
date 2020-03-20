import React, { Component } from 'react'
import ItemList from '../../components/ItemList'
import Row from '../../components/Row'
import withApiService from '../../hocs/withApiService'
import ItemDetails, { Record } from '../../components/ItemDetails'
import './People.css'


const ItemDetailsWrapped = withApiService(ItemDetails, 'getPerson')

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

    const list = <ItemList
      selectedItemId={ personId }
      onItemSelected={ this.selectPerson }
      renderItem={ item => `${item.name}` }
    />

    
    const details = (
      <ItemDetailsWrapped itemId={ personId }>
        <Record field="height" label="Height" />
        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="Birthyear" />
        <Record field="eyeColor" label="Eye Color" />
        <Record field="hairColor" label="Hair Color" />
      </ItemDetailsWrapped>
    )

    return (
      <div className="people-page">
        <h2 className="mt-4">People</h2>
        <Row left={ list } right={ details } />
      </div>
    )
  }
}

export default People
