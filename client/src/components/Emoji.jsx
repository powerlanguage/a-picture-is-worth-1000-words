import React from 'react'

const Emoji = (props) => {

  const style = {
    fontSize: props.size
  }

  return (
    <span style={style} title={props.count}>{props.emoji}</span>
  )
}

module.exports = Emoji;
