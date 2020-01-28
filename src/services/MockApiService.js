import faker from 'faker'


class MockApiService {
  
  static get MAX_PLANETS() {
    return 61
  }

  _delay = process.env.REACT_APP_MOCK_API_DELAY

  _delayed(data) {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, this._delay)
    })
  }

  getResource(url) {
    return Promise.resolve({
    })
  }

  getAllPeople() {
    return this._delayed([

    ])
  }

  getPerson(id) {
    return this._delayed({
      id
    })
  }

  getAllPlanets() {
    return this._delayed([])
  }

  getPlanet(id) {
    return this._delayed({
      id,
      name: faker.name.firstName(),
      population: faker.random.number(100000000),
      diameter: faker.random.number(100000),
      rotationPeriod: faker.random.number(40),
      orbitalPeriod: faker.random.number(1000),
      climate: '',
      terrain: '',
      surfaceWater: faker.random.number(100)
    })
  }

  getAllShips() {
    return this._delayed([

    ])
  }

  getShip(id) {
    return this._delayed({

    })
  }

}

export default MockApiService
