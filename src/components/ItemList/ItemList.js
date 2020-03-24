import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ItemList.css'


export class ItemList extends Component {
  
  static propTypes = {
    onItemSelected: PropTypes.func,
    selectedItemId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    renderItem: PropTypes.func
  }

  static defaultProps = {
    onItemSelected: () => {},
    renderItem: item => item.name
  }

  state = {
    selectedItemId: this.props.selectedItemId,
  }

  selectItem = (id) => {
    this.setState({ selectedItemId: id })
    this.props.onItemSelected(id)
  }

  render() {
    const { selectedItemId } = this.state
    const { data, renderItem } = this.props

    const elements = data.map( item => {
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
