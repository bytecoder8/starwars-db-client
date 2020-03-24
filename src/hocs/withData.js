import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'


const withData = (WrappedComponent) => {
  return class extends Component {
    
    state = {
      data: null,
      isLoading: true,
      error: null
    }

    static propTypes = {
      getData: PropTypes.func.isRequired
    }

    componentDidMount() {
      this.updateData()
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) { // on API change
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

      this.setState({
        isLoading: true,
        error: null
      })

      this.props.getData()
        .then( data => {
          this.setState({
            data,
            isLoading: false
          })
        })
        .catch(this.onError)
    }

    render() {
      const { isLoading, error, data } = this.state

      if (error) {
        return <ErrorMessage error={ error } />
      }
  
      if (isLoading) {
        return <Loader />
      }

      return <WrappedComponent {...this.props} data={data} />
    }
  }
}

export default withData
