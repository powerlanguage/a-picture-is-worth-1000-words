import React from 'react'

const Info = (props) => {

  return (
    <div className="info">
      <div className="data">{props.data}</div>
      <div className="description">{props.description}</div>
    </div>
  )
}

module.exports = Info;
