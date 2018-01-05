import React from 'react'
import Emoji from './Emoji.jsx'

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      emojiCount: {},
      totalMessage: 0,
      messagesContainingEmoji: 0,
      recentEmoji: []
    }
  }

  componentDidMount(){
    fetch('/process')
      .then(response => {
        return response.json()
      })
      .then(serverData => {
        console.log(serverData);
        this.setState (serverData);
      })
  }

  render() {
    console.log(this.state);

    return(
      <div>
        { Object.keys(this.state.emojiCount).map((emoji, i) =>
          <Emoji
            key={i}
            emoji={emoji}
          />
        )}
      </div>
    )
  }

}

module.exports = App;