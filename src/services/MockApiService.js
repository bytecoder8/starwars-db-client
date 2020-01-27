import faker from 'faker'


class MockApiService {
  
  static get MAX_PLANETS() {
    return 61
  }

  getResource(url) {
    return Promise.resolve({

    })
  }

  getAllPeople() {
    return Promise.resolve([

    ])
  }

  getPerson(id) {
    return Promise.resolve({
      id
    })
  }

  getAllPlanets() {
    return Promise.resolve([

    ])
  }

  getPlanet(id) {
    return Promise.resolve({
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
    return Promise.resolve([

    ])
  }

  getShip(id) {
    return Promise.resolve({

    })
  }

}

export default MockApiService
