import React from 'react'

function ErrorMessage({ error }) {
  return (
    <div className="alert alert-danger error-message">
      <h4 className="alert-heading">Warning!</h4>
      <p className="mb-0">Something went wrong. Try again later.</p>
    </div>
  )
}

export default ErrorMessage
