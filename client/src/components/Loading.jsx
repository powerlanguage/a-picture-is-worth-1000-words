import React from 'react'

const Loading = (props) => {

  return (
    <div className="loading">
      <div className="loader">💩</div>
      <div className="loading-message">Loading...</div>
    </div>
  )
}

module.exports = Loading;


// <b>{props.description}:</b>{props.val}
