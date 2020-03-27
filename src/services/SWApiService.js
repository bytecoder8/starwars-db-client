import { AbstractApi, ApiTransformer } from './AbstractApi'


class SWApiTransformer extends ApiTransformer {
  extractId(resource) {
    return resource.url.match(/\/(\d+)\/$/)[1]
  }

  transformPlanet(planet) {
    const id = this.extractId(planet)
    return ({
      id,
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      rotationPeriod: planet.rotation_period,
      orbitalPeriod: planet.orbital_period,
      climate: planet.climate,
      terrain: planet.terrain,
      surfaceWater: planet.surface_water,
      imageSrc: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    })
  }

  transformPerson(person) {
    return ({
      id: this.extractId(person),
      name: person.name,
      height: person.height,
      mass: person.mass,
      hairColor: person.hair_color,
      skinColor: person.skin_color,
      eyeColor: person.eye_color,
      birthYear: person.birth_year,
      gender: person.gender
    })
  }

  transformShip(ship) {
    return ({
      id: this.extractId(ship),
      name: ship.name
    })
  }
}


class SWApiService extends AbstractApi {
  baseUrl = 'https://swapi.co/api'
  transformer = new SWApiTransformer()
  
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

  getAllPeople = async () => {
    const res = await this.getResource('/people')
    return res.results.map( person => this.transformer.transformPerson(person))
  }

  getPerson = async (id) => {
    const res = await this.getResource(`/people/${id}`)
    return this.transformer.transformPerson(res)
  }

  getAllPlanets = async () => {
    const res = await this.getResource('/planets')
    return res.results.map( planet => this.transformer.transformPlanet(planet))
  }

  getPlanet = async (id) => {
    const res = await this.getResource(`/planets/${id}`)
    return this.transformer.transformPlanet(res)
  }

  getAllShips = async () => {
    const res = await this.getResource('/starships')
    return res.results.map( ship => this.transformer.transformShip(ship))
  }

  getShip = async (id) => {
    const res = await this.getResource(`/starships/${id}`)
    return this.transformer.transformShip(res)
  }
}

export default SWApiService
