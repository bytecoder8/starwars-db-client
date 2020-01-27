import React from 'react'
import './Loader.css'


export default function Loader() {
  return(
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
}
