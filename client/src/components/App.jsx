import React from 'react'
import Stats from './Stats.jsx'
import About from './About.jsx'
import Header from './Header.jsx'
import EmojiFeed from './EmojiFeed.jsx'
import Loading from './Loading.jsx'

import {
  Route,
  Switch,
  NavLink,
  HashRouter
} from 'react-router-dom'

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
    document.title = "🖼 ️💰 1️⃣0️⃣0️⃣0️⃣ 🔡"
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
      <HashRouter>
        <div id="container">
          <Header />
          <ul className="navigation">
            <li><NavLink exact to="/">Feed</NavLink></li>
            <li><NavLink to="/statistics">Statistics</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
            <div className="content">
              {this.state.totalMessages ? (
                <Switch>
                  <Route
                    exact path="/"
                    render={ () =>
                      <EmojiFeed sortedEmojiCount={sorted}/>
                    }/>
                  <Route
                    path="/statistics"
                    render={ () =>
                      <Stats
                        sortedEmojiCount={sorted}
                        totalMessages={this.state.totalMessages}
                        messagesContainingEmoji={this.state.messagesContainingEmoji}/>
                    }/>
                  <Route
                    path="/about"
                    component={About}
                  />
                </Switch>
                ) : (
                  <Loading />
                )}
            </div>
        </div>
      </HashRouter>
    )
  }

}

module.exports = App;