import React, { Component } from 'react'
import ItemList from '../../components/ItemList'
import Row from '../../components/Row'
import PersonDetails from '../../components/PersonDetails'
import './People.css'


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
      renderItem={ (item) => item.name }
    />

    const details = <PersonDetails personId={ personId } />

    return (
      <div className="people-page">
        <h2 className="mt-4">People</h2>
        <Row left={ list } right={ details } />
      </div>
    )
  }
}

export default People
