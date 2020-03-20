import React, { Component } from 'react'
import ApiContext from '../../context'
import ItemList from '../../components/ItemList'
import Row from '../../components/Row'
import ItemDetails, { Record } from '../../components/ItemDetails'
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

    const list = 
    <ApiContext.Consumer>
      {
        ({ getAllPeople }) => (
          <ItemList
            selectedItemId={ personId }
            onItemSelected={ this.selectPerson }
            renderItem={ item => `${item.name}` }
            getData={ getAllPeople }
          />
        )
      }
    </ApiContext.Consumer>


    const details = (
      <ApiContext.Consumer>
        {
          ({ getPerson }) => (
            <ItemDetails itemId={ personId } getData={ getPerson }>
              <Record field="height" label="Height" />
              <Record field="gender" label="Gender" />
              <Record field="birthYear" label="Birthyear" />
              <Record field="eyeColor" label="Eye Color" />
              <Record field="hairColor" label="Hair Color" />
            </ItemDetails>
          )
        }
      </ApiContext.Consumer>
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
