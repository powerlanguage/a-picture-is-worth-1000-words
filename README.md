# A Picture Is Worth 1000 Words

I built this project to get more experience with Node, Express and React after discovering the undocumented [public venmo API](https://venmo.com/api/v5/public).

*A Picture Is Worth 1000 Words* performs real-time analysis on the emoji that people use in Venmo payment messages.

* The feed page displays a sampled real-time feed of emoji usage in messages.  The larger the emoji, the more it has been used.
* The statistics page displays more detailed information about on the number of each emoji seen.

View it live on heroku: https://a-picture-is-worth-1000-words.herokuapp.com

This project use's Kevin Scott's [emoji-tree](https://www.npmjs.com/package/emoji-tree) module to parse emoji from text.  You can read more about how it works [here](https://medium.com/reactnative/emojis-in-javascript-f693d0eb79fb).

