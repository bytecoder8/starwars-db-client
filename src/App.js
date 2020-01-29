import React, { Component } from 'react';
import Navbar from './components/Navbar'
import RandomPlanet from './components/RandomPlanet'
import ItemList from './components/ItemList';
import PersonDetails from './components/PersonDetails';


class App extends Component {
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
      <div className="container">
        <Navbar />
        <h2>Random Planet</h2>
        <RandomPlanet />

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
    );
  }
}

export default App;
