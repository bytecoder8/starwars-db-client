import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from '../Loader'
import './ItemList.css'


export class ItemList extends Component {
  
  static propTypes = {
    onItemSelected: PropTypes.func,
    selectedItemId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }

  state = {
    items: null,
    selectedItemId: this.props.selectedItemId,
    isLoading: true
  }
  apiService = this.props.apiService

  componentDidMount() {
    this.updateData()
  }

  async updateData() {
    const items = await this.apiService.getAllPeople()
    this.setState({
      items,
      isLoading: false
    })
  }

  selectItem = (id) => {
    this.setState({ selectedItemId: id })
    this.props.onItemSelected(id)
  }

  render() {
    const { isLoading, selectedItemId, items } = this.state

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
        >{ item.name }</li>
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
