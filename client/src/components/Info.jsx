import React from 'react'

const Info = (props) => {

  return (
    <div>
      <h2>{props.description}</h2>
      <div>{props.val}</div>
    </div>
  )
}

module.exports = Info;