const express = require('express');
const axios = require('axios');

// Finds emoji in text
const emojiTree = require('emoji-tree');

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));

let url = "https://venmo.com/api/v5/public"

const emojiCount = {};
let totalMessages = 0;
let messagesContainingEmoji = 0;

app.use(express.static(__dirname + '/../client/dist'));

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
        let countEmojiInMessage = 0;
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
