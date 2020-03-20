import React from 'react'

export default function Row({ left, right }) {
  return(
    <div className="row">
      <div className="col-4">
        { left }
      </div>
      <div className="col-6">
        { right }
      </div>
    </div>
  )
}
