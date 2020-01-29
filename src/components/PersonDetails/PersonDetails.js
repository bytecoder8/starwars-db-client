import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from '../Loader'
import ErrorMessage from '../ErrorMessage'


export class PersonDetails extends Component {
  static propTypes = {
    personId: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]),
    apiService: PropTypes.object.isRequired
  }

  state = {
    person: {},
    isLoading: true,
    error: null
  }

  componentDidMount() {
    this.updateData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.personId !== this.props.personId) {
      this.updateData()
    }
  }

  onError = error => {
    this.setState({
      isLoading: false,
      error
    })
  }

  updateData() {
    const { personId, apiService } = this.props

    this.setState({ isLoading: true, error: null })

    apiService
      .getPerson(personId)
      .then( person => {
        this.setState({
          person,
          isLoading: false
        })
      })
      .catch(this.onError)
  }

  render() {
    const { isLoading, error, person } = this.state
    const { personId } = this.props

    if (error) {
      return <ErrorMessage error={ error } />
    }

    if (isLoading) {
      return <Loader />
    }

    return (
      <div className="card">
        <h3 className="card-header">{ person.name } #{ personId }</h3>
        <div className="card-body">
          <ul className="list-group person-details">
            <li className="list-group-item">
              Height: { person.height }
            </li>
            <li className="list-group-item">
              Gender: { person.gender }
            </li>
            <li className="list-group-item">
              Birthyear: { person.birthYear }
            </li>
            <li className="list-group-item">
              Eye Color: { person.eyeColor }
            </li>
            <li className="list-group-item">
              Hair Color: { person.hairColor }
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default PersonDetails
