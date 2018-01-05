import React from 'react'
import Emoji from './Emoji.jsx'
import Info from './Info.jsx'

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

    // Font limits
    const BASE_FONT_SIZE = 8;
    const MAX_FONT_SIZE = 100;

    // Sort the hashmap of counts so we can always display the most
    // used first

    const sorted = [];
    for(const key in this.state.emojiCount) {
      sorted.push([key, this.state.emojiCount[key]]);
    }

    sorted.sort((a, b) => b[1] - a[1]);

    return(
      <div>
        { sorted.map((emojiCount, i) => {

          const size = (emojiCount[1] + BASE_FONT_SIZE < MAX_FONT_SIZE) ? emojiCount[1] + BASE_FONT_SIZE : MAX_FONT_SIZE;

          return <Emoji
            key={i}
            emoji={emojiCount[0]}
            count={emojiCount[1]}
            size={size}
          />
        }
        )}
        <Info description={"Total Messages Received"} val={this.state.totalMessages} />
        <Info description={"Messages Containing Emoji"} val={this.state.messagesContainingEmoji} />
        <Info description={"Percentage"} val={Math.floor((this.state.messagesContainingEmoji / this.state.totalMessages) * 100)}/>
      </div>
    )
  }

}

module.exports = App;