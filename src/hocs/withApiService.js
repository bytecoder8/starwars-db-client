import React, { Component } from 'react'
import MockApiService from '../services/MockApiService'
import SWApiService from '../services/SWApiService'

function withApiService(WrappedComponent, dataFunc) {
  return class extends Component {
    render() {
      const apiService = process.env.REACT_APP_API === 'mock'
        ? new MockApiService() : new SWApiService()

      return(
        <WrappedComponent
          {...this.props}
          getData={apiService[dataFunc].bind(apiService)}
        />
      )
    }
  }
}

export default withApiService
