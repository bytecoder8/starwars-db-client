import React, { Component } from 'react'
import MockApiService from '../services/MockApiService'
import SWApiService from '../services/SWApiService'

function withApiService(WrappedComponent) {
  return class extends Component {
    render() {
      const apiService = process.env.REACT_APP_API === 'mock'
        ? new MockApiService() : new SWApiService()

      return(
        <WrappedComponent
          {...this.props}
          apiService={apiService}
        />
      )
    }
  }
}

export default withApiService
