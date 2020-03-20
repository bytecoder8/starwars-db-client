import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from '../Loader'
import './ItemList.css'
import ErrorMessage from '../ErrorMessage'


export class ItemList extends Component {
  
  static propTypes = {
    onItemSelected: PropTypes.func,
    selectedItemId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    getData: PropTypes.func.isRequired,
    renderItem: PropTypes.func.isRequired
  }

  state = {
    items: null,
    selectedItemId: this.props.selectedItemId,
    isLoading: true,
    error: null
  }

  componentDidMount() {
    this.updateData()
  }

  onError = error => {
    this.setState({
      isLoading: false,
      error
    })
  }

  updateData() {
    this.props
      .getData()
      .then( items => {
        this.setState({
          items,
          isLoading: false
        })
      })
      .catch(this.onError)
  }

  selectItem = (id) => {
    this.setState({ selectedItemId: id })
    this.props.onItemSelected(id)
  }

  render() {
    const { isLoading, error, selectedItemId, items } = this.state
    const { renderItem } = this.props

    if (error) {
      return <ErrorMessage error={ error } />
    }

    if (isLoading) {
      return <Loader />
    }

    const elements = items.map( item => {
      let classNames = 'list-group-item'
      if (item.id === selectedItemId) {
        classNames += ' active'
      }

      return (
        <li className={ classNames }
          key={item.id}
          onClick={ () => this.selectItem(item.id) }
        >{ renderItem(item) }</li>
      )
    })

    return (
      <ul className="list-group item-list">
        { elements }
      </ul>
    )
  }
}

export default ItemList
