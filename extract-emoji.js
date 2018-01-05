// const extractEmoji = require('extract-emoji').extractEmoji;
const mockData = require('./mockData').data;

//var emojiCompact = require('emoji.json/emoji-compact.json')

const emojiTree = require('emoji-tree');

// console.log(emojiCompact)

//console.log(extractEmoji('🥃 Tumbler Glass, 🐜 Ant and ⚙️ Gear. 🧑🏽'));

// console.log(emoji.length);

//console.log(emojiTree('🥃 Tumbler Glass, 🐜 Ant and ⚙️ Gear. 🧑🏽'));

mockData.forEach(entry => {
  textTree = emojiTree(entry.message);
  console.log(textTree);
  textTree.forEach(item => {
    if(item.type === 'emoji') {
      console.log(item.text);
    }
  })
  console.log('-----')
})
