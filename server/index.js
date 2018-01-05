const express = require('express');
const axios = require('axios');

// Refactor emoji parsing to separate file

// Finds emoji in text
const emojiTree = require('emoji-tree');

const app = express();
const port = 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));

let url = "https://venmo.com/api/v5/public"
// load route
// return parsed data to client
// client renders passed back data

const emojiCount = {};
let totalMessages = 0;
let messagesContainingEmoji = 0;

app.use(express.static(__dirname + '/../client/dist'));


// app.get('/load', (req, res) => {
//   res.send(['💦', '🔌', '🔥', '👕', '🎁', '🍾', '🇲🇽', '🎬', '🎟', '🏈',]);
// })

app.get('/process', (req, res) => {
  axios.get(url)
    .then(response => {
      // figure out if we've seen these before?
      messages = response.data.data.map(item => item.message);
      return messages;
    })
    .then(messages => {

      // Extract emoji from each message
      // We also want to track the number of messages that
      // contain emoji (hunch is some people send multiple emoji per
      // message.

      const emojiInMessages = []

      messages.forEach(message => {

        // Parse message to char map
        const charMap = emojiTree(message);
        let seenEmojiInMessage = false;
        totalMessages += 1;

        charMap.forEach(char => {
          if(char.type === 'emoji') {
            const emoji = char.text;
            emojiInMessages.push(emoji);

            // increment message count if we haven't already
            // and mark this message as having contained an emoji
            if(!seenEmojiInMessage) {
              messagesContainingEmoji += 1;
              seenEmojiInMessage = true;
            }

            // increment global count
            emojiCount[emoji] = emojiCount[emoji] + 1 || 1;

          }
        })
      })

      res.send({
        totalMessages: totalMessages,
        messagesContainingEmoji: messagesContainingEmoji,
        totalEmoji: Object.values(emojiCount).reduce((acc, val) => acc + val),
        recentEmoji: emojiInMessages,
        emojiCount: emojiCount
      });
    })
    .catch(err => res.send(err));
})

/*
processor = () => {

  axios.get(url)
    .then(response => {
      // figure out if we've seen these before?
      messages = response.data.data.map(item => item.message);
      return messages;
    })
    .then(messages => {
      // TODO: Clean this up
      // maybe write one map reduce function that accepts an entire
      // venmo item and process it through to an emoji
      const output = messages.reduce((allEmojis, message) =>
          allEmojis.concat(emojiTree(message)),
          [])
        .reduce((messageEmoji, messageItem) => {
          if(messageItem.type === 'emoji') {
            console.log(messageItem.text);
            messageEmoji.push(messageItem.text);
          }
          return messageEmoji;
        }, []);
      console.log(output);
    })
    .catch(console.log);
}
*/


// sortable = [];
// for(const key in counts) {
//   sortable.push([key, counts[key]]);
// }

// sortable.sort((a, b) => b[1] - a[1]);