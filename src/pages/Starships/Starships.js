import React, { Component } from 'react'
import ItemList from '../../components/ItemList'
import ItemDetails, { Record } from '../../components/ItemDetails'
import withApiService from '../../hocs/withApiService'
import Row from '../../components/Row'


const ItemDetailsWrapped = withApiService(ItemDetails, 'getShip')

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

    const list = <ItemList
      selectedItemId={ starshipId }
      onItemSelected={ this.selectStarship }
      renderItem={ (item) => item.name }
    />

    
    const details = (
      <ItemDetailsWrapped itemId={ starshipId }>
        <Record field="name" label="Name" />
      </ItemDetailsWrapped>
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
