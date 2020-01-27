import React, { Component } from 'react'
import config from '../config'
import MockApiService from '../services/MockApiService'
import SWApiService from '../services/SWApiService'

function withApiService(WrappedComponent) {
  return class extends Component {
    render() {
      const apiService = config.API_SERVICE === 'mock'
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
