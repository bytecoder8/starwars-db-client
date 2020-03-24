import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from '../Loader'
import ErrorMessage from '../ErrorMessage'


export const Record = ({ item, field, label }) => (
  <li className="list-group-item">
    {label}: { item[field] }
  </li>
)


export class ItemDetails extends Component {
  static propTypes = {
    itemId: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]).isRequired,
    getData: PropTypes.func.isRequired
  }

  state = {
    item: {},
    isLoading: true,
    error: null
  }

  componentDidMount() {
    this.updateData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.itemId !== this.props.itemId || prevProps.getData !== this.props.getData) {
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
    const { itemId, getData } = this.props

    this.setState({ isLoading: true, error: null })

    getData(itemId)
      .then( item => {
        this.setState({
          item,
          isLoading: false
        })
      })
      .catch(this.onError)
  }

  render() {
    const { isLoading, error, item } = this.state
    const { itemId } = this.props

    if (error) {
      return <ErrorMessage error={ error } />
    }

    if (isLoading) {
      return <Loader />
    }

    if (!item) {
      return <div>Select an item from the list</div>
    }

    return (
      <div className="card">
        <h3 className="card-header">{ item.name } #{ itemId }</h3>
        <div className="card-body">
          <ul className="list-group item-details">
            { 
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item })
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default ItemDetails
