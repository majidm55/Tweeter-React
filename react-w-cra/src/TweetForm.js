import React, { useState } from 'react';
import './Layout.css';

export const TweetForm = props => {
  const {  addNewTweet } = props;
  const [tweetText, setTweetText] = useState("");
  const tweetLengthRemaining = 140 - tweetText.length
  const spanStyle = {color: tweetLengthRemaining >=0 ? 'black' : 'red'}

  const submitTweet = event => {
    event.preventDefault();
    if(tweetLengthRemaining >= 0 && tweetLengthRemaining < 140) {
      addNewTweet(tweetText);
      setTweetText("");
    }
  }
  return (

    <section className="new-tweet">

      <h2>Compose Tweet</h2>
      <div className="line"></div>

      <form onSubmit={submitTweet} action="/tweets" method="POST">
        <textarea value={tweetText} onChange={event => setTweetText(event.target.value)} name="text" placeholder="What are you humming about?"></textarea>
        <input type="submit" name="form-submitt" value="Tweet" />
        <span style={spanStyle} className="counter">{140 - tweetText.length}</span>
        <p className ="error"></p>
      </form>
    </section>
  )
}