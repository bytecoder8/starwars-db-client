import React, { Component } from 'react'
import ApiContext from '../context'

function withApiService(WrappedComponent, dataFunc) {
  return class extends Component {
    render() {
      return(
        <ApiContext.Consumer>
          {
            (apiService) => (
            <WrappedComponent
              {...this.props}
              getData={apiService[dataFunc].bind(apiService)}
            />
            )
          }
        </ApiContext.Consumer>
      )
    }
  }
}

export default withApiService
