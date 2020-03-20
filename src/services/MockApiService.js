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

  _generatePerson(id) {
    const gender = faker.random.arrayElement(['male', 'female'])
    return {
      id,
      name: faker.name.findName(null, null, gender),
      height: faker.random.number({ min: 150, max: 200 }),
      mass: faker.random.number({ min: 50, max: 200 }),
      hairColor: faker.internet.color(),
      skinColor: faker.internet.color(),
      eyeColor: faker.internet.color(),
      birthYear: `${ faker.random.number(30) }BBY`,
      gender: gender,
    }
  }

  getAllPeople = () => {
    const items = Array.from(Array(10), (value, index) => {
      return this._generatePerson(index + 1)
    })
    return this._delayed(items)
  }

  getPerson = (id) => {
    return this._delayed(this._generatePerson(id))
  }

  getAllPlanets = () => {
    return this._delayed([])
  }

  getPlanet = (id) => {
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


  _generateShip(id) {
    return {
      id,
      name: faker.name.firstName(),
      mass: faker.random.number({ min: 50, max: 200 }),
    }
  }

  getAllShips = () => {
    const items = Array.from(Array(10), (value, index) => {
      return this._generateShip(index + 1)
    })
    return this._delayed(items)
  }

  getShip = (id) => {
    return this._delayed({
      id,
      name: faker.name.firstName(),
    })
  }

}

export default MockApiService
