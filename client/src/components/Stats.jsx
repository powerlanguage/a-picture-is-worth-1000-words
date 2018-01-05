import React from 'react'
import Info from './Info.jsx'
import EmojiTable from './EmojiTable.jsx'

const Stats = (props) => {

  const percentage = Math.floor((props.messagesContainingEmoji / props.totalMessages) * 100) + '%';
  //const emojiPerMessage = / props.messagesContainingEmoji

  const totalEmoji = props.sortedEmojiCount.reduce((total, emojiCount) => total += emojiCount[1], 0);
  const emojiPerMessage = (totalEmoji / props.messagesContainingEmoji).toFixed(2);

  return (
    <div className="statistics">
      <div className="information">
        <Info description={"Total Messages"} data={props.totalMessages}/>
        <Info description={"Messages with Emoji"} data={percentage}/>
        <Info description={"Total Emoji"} data={totalEmoji}/>
        <Info description={"Emoji Per Message "} data={emojiPerMessage}/>
      </div>
      <EmojiTable sortedEmojiCount={props.sortedEmojiCount}/>
    </div>
  )
}

module.exports = Stats;