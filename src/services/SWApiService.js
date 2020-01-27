class SWApiService {
  baseUrl = 'https://swapi.co/api'

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

  getPerson(id) {
    return this.getResource(`/people/${id}`)
  }
}

export default SWApiService
