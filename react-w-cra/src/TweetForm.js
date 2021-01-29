import React, { useState } from 'react';
import './Layout.css';

export const TweetForm = () => {

  const [tweetText, setTweetText] = useState("");

  return (

    <section className="new-tweet">

      <h2>Compose Tweet</h2>
      <div className="line"></div>

      <form action="/tweets" method="POST">
        <textarea value={tweetText} onChange={event => setTweetText(event.target.value)} name="text" placeholder="What are you humming about?"></textarea>
        <input type="submit" name="form-submitt" value="Tweet" />
        <span className="counter">140</span>
        <p className ="error"></p>
      </form>
    </section>
  )
}