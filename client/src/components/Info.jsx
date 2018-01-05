import React from 'react'

const Info = (props) => {

  return (
    <div className="info">
      {props.description}
      {props.data}
    </div>
  )
}

module.exports = Info;


// <b>{props.description}:</b>{props.val}
