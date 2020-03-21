import React, { Component } from 'react'
import ApiContext from '../context'

// Gets access to context and returns mapped methods from API
// mapMethodsToProps is either a function or a plain object
function withApiService(WrappedComponent, mapMethodsToProps) {
  return class extends Component {
    render() {
      return(
        <ApiContext.Consumer>
          {
            (apiService) => {
              let mappedProps = {}
              if (typeof mapMethodsToProps === 'function') {
                mappedProps = mapMethodsToProps(apiService)
              } else {
                for (let [key, value] of Object.entries(mapMethodsToProps)) {
                  mappedProps[key] = apiService[value]
                }
              }
              
              return(
                <WrappedComponent {...this.props} {...mappedProps} />
              )
            }
          }
        </ApiContext.Consumer>
      )
    }
  }
}

export default withApiService
