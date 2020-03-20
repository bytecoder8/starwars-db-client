import React, { Component } from 'react'
import ApiContext from '../../context'
import ItemList from '../../components/ItemList'
import ItemDetails, { Record } from '../../components/ItemDetails'
import Row from '../../components/Row'


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
    <ApiContext.Consumer>
      {
        ({ getAllShips }) => (
          <ItemList
            selectedItemId={ starshipId }
            onItemSelected={ this.selectStarship }
            renderItem={ (item) => item.name }
            getData={ getAllShips }
          />
        )
      }
    </ApiContext.Consumer>


    const details = (
      <ApiContext.Consumer>
        {
          ({ getShip }) => (
            <ItemDetails itemId={ starshipId } getData={ getShip }>
              <Record field="name" label="Name" />
            </ItemDetails>
          )
        }
      </ApiContext.Consumer>
    )

    return (
      <div className="starships-page">
        <h2 className="mt-4">Starships</h2>
        <Row left={ list } right={ details } />
      </div>
    )
  }
}

export default Starships
