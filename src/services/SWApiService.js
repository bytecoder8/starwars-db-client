class SWApiService {
  baseUrl = 'https://swapi.co/api'
  
  static get MAX_PLANETS() {
    return 61
  }

  async getResource(url) {
    const response = await fetch(this.baseUrl + url)
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status is ${response.status}`)
    }
    const body = await response.json()
    return body
  }

  async getAllPeople() {
    const res = await this.getResource('/people')
    return res.results
  }

  async getPerson(id) {
    const res = this.getResource(`/people/${id}`)
    return this._transformPerson(res)
  }

  async getAllPlanets() {
    const res = await this.getResource('/planets')
    return res.map( planet => this._transformPlanet(planet))
  }

  async getPlanet(id) {
    const res = await this.getResource(`/planets/${id}`)
    return this._transformPlanet(res)
  }

  async getAllShips() {
    const res = await this.getResource('/ships')
    return res.map( ship => this._transformShip(ship))
  }

  async getShip(id) {
    const res = await this.getResource(`/ships/${id}`)
    return this._transformShip(res)
  }

  _extractId(resource) {
    return resource.url.match(/\/(\d+)\/$/)[1]
  }

  _transformPlanet(planet) {
    return ({
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      rotationPeriod: planet.rotation_period,
      orbitalPeriod: planet.orbital_period,
      climate: planet.climate,
      terrain: planet.terrain,
      surfaceWater: planet.surface_water
    })
  }

  _transformPerson(person) {
    return ({
      id: this._extractId(person),
      name: person.name
    })
  }

  _transformShip(ship) {
    return ({
      id: this._extractId(ship),
      name: ship.name
    })
  }
}

export default SWApiService
