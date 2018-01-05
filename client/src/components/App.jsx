import React from 'react'
import Emoji from './Emoji.jsx'
import Stats from './Stats.jsx'
import EmojiFeed from './EmojiFeed.jsx'

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      emojiCount: {},
      totalMessages: 0,
      messagesContainingEmoji: 0,
      recentEmoji: []
    }
    this.getUpdates = this.getUpdates.bind(this);
  }

  componentDidMount() {
    this.getUpdates();
    setInterval(this.getUpdates, 500);
  }

  getUpdates() {
    fetch('/process')
      .then(response => {
        return response.json()
      })
      .then(serverData => {
        this.setState (serverData);
      })
  }

  render() {

    // Sort our emoji count to an array of tuples so it
    // can be used by various components
    const sorted = [];
    for(const key in this.state.emojiCount) {
      sorted.push([key, this.state.emojiCount[key]]);
    }

    sorted.sort((a, b) => b[1] - a[1]);

    return(
      <div>
        <Stats
          sortedEmojiCount={sorted}
          totalMessages={this.state.totalMessages}
          messagesContainingEmoji={this.state.messagesContainingEmoji}
        />
        <EmojiFeed sortedEmojiCount={sorted}/>
      </div>
    )
  }

}

module.exports = App;