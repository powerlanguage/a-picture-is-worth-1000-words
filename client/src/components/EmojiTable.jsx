import React from 'react'

var emojiText = require("emoji-text");

const EmojiTable = (props) => {

  return (
    <div className="emoji-table">
      <table>
        <thead>
          <tr>
            <td>Emoji</td>
            <td>Text</td>
            <td>Count</td>
          </tr>
        </thead>
        <tbody>
          {
            props.sortedEmojiCount.map((emojiCount, i) =>
              <tr key={i}>
                <td>{emojiCount[0]}</td>
                <td>{emojiText.convert(emojiCount[0], {delimiter: ':'})}</td>
                <td>{emojiCount[1]}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

module.exports = EmojiTable;
