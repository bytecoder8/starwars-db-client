import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from '../Loader'
import ErrorMessage from '../ErrorMessage'
import './ItemDetails.css'


export const Record = ({ item, field, label, children }) => {
  const value = (typeof children === 'function') ? children(item[field]) : item[field]

  return(
    <li className="list-group-item">
      { label }: { value }
    </li>
  )
}


export class ItemDetails extends Component {
  static propTypes = {
    itemId: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]),
    getData: PropTypes.func.isRequired
  }

  state = {
    item: null,
    isLoading: false,
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
    if (!itemId) {
      return
    }

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
        {item.imageSrc &&
          <div className="image-wrapper">
            <img src={item.imageSrc} className="img-fluid" alt="Item Details" />
          </div>
        }
        <h3 className="card-header">{ item.name }</h3>
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
