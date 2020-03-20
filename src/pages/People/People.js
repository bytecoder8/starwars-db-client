import React, { Component } from 'react'
import ItemList from '../../components/ItemList'
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

    return (
      <div className="people-page">
        <h2 className="mt-4">People</h2>
        <div className="row">
          <div className="col-4">
            <ItemList
              selectedItemId={ personId }
              onItemSelected={ this.selectPerson }
            />
          </div>
          <div className="col-6">
            <PersonDetails personId={ personId } />
          </div>
        </div>
      </div>
    )
  }
}

export default People
