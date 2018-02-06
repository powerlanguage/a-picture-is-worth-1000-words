import React from 'react'
import Emoji from './Emoji.jsx'

const EmojiFeed = (props) => {

  // Font limits
  const BASE_FONT_SIZE = 8;
  const MAX_FONT_SIZE = 100;

  return (
    <div className="emoji-feed">
      {
        props.sortedEmojiCount.map((emojiCount, i) => {

          const size = (emojiCount[1] + BASE_FONT_SIZE < MAX_FONT_SIZE) ? emojiCount[1] + BASE_FONT_SIZE : MAX_FONT_SIZE;

          return <Emoji
            key={i}
            emoji={emojiCount[0]}
            count={emojiCount[1]}
            size={size}
          />
        })
      }
    </div>
  )
}

module.exports = EmojiFeed;
