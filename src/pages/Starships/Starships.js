import React, { Component } from 'react'
import ItemList from '../../components/ItemList'
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

    const list = <ItemList
      selectedItemId={ starshipId }
      onItemSelected={ this.selectStarship }
      renderItem={ (item) => item.name }
    />

    return (
      <div className="starships-page">
        <h2 className="mt-4">Starships</h2>
        <Row left={ list } />
      </div>
    )
  }
}

export default Starships
