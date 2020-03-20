import React, { Component } from 'react'
import ItemList from '../../components/ItemList'


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

    return (
      <div className="starships-page">
        <h2 className="mt-4">Starships</h2>
        <div className="row">
          <div className="col-4">
            <ItemList
              selectedItemId={ starshipId }
              onItemSelected={ this.selectStarship }
              renderItem={ (item) => item.name }
            />
          </div>
          <div className="col-6">
            
          </div>
        </div>
      </div>
    )
  }
}

export default Starships
