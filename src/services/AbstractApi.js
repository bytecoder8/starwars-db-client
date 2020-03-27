export class AbstractApi {
  baseUrl = ''

  getPerson = async () => {
    throw new TypeError("Must override method")
  }

  getAllPeople = async () => {
    throw new TypeError("Must override method")
  }

  getPlanet = async () => {
    throw new TypeError("Must override method")
  }

  getAllPlanets = async () => {
    throw new TypeError("Must override method")
  }

  getShip = async () => {
    throw new TypeError("Must override method")
  }

  getAllShips = async () => {
    throw new TypeError("Must override method")
  }
}


export class ApiTransformer {
  extractId(resource) {
    return resource.url.match(/\/(\d+)\/$/)[1]
  }

  transformPlanet(planet) {
    return planet
  }

  transformPerson(person) {
    return person
  }

  transformShip(ship) {
    return ship
  }
}
