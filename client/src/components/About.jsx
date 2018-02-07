import React from 'react'

const About = (props) => {

  return (
    <div class="about">
      <h1>What images do people use when talking about money?</h1>
      <p><em>A Picture Is Worth 1000 Words</em> performs real-time analysis on the emoji that people use in Venmo payment messages.</p>
      <ul>
        <li>The feed page displays a sampled real-time feed of emoji usage in messages.  The larger the emoji, the more it has been used.</li>
        <li>The statistics page displays more detailed information about on the number of each emoji seen.</li>
      </ul>
      <p>
        I created this project after discovering the undocumented <a href="https://venmo.com/api/v5/public" rel="nofollow">public venmo API</a>.
        You can view the code for this project on <a href="https://github.com/powerlanguage/a-picture-is-worth-1000-words">github</a>.
      </p>
    </div>
  )
}

module.exports = About;
