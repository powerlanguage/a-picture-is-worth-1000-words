import React from 'react'
import Info from './Info.jsx'
import EmojiTable from './EmojiTable.jsx'

const Stats = (props) => {

  const percentage = Math.floor((props.messagesContainingEmoji / props.totalMessages) * 100) + '%';

  return (
    <div id="stats">
      <div className="information">
        <Info description={"Total Messages"} data={props.totalMessages}/>
        <Info description={"Messages Containing emoji"} data={props.messagesContainingEmoji}/>
        <Info description={"Percentage"} data={percentage}/>
      </div>
      <EmojiTable sortedEmojiCount={props.sortedEmojiCount}/>
    </div>
  )
}

module.exports = Stats;