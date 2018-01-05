import React from 'react'

const Emoji = (props) => {

  function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const random = getRandomInt(8, 100);
  const style = {
    fontSize: random
  }

  return (
    <span style={style}>{props.emoji}</span>
  )
}

module.exports = Emoji;