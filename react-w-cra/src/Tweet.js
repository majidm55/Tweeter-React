import React from 'react';
import './Layout.css';

export const Tweet = (props) => {
  const {name, handle, text, date, src} = props
  return (
    <article className="tweet-box">
      <header>
        <img style={{width: "15%", borderRadius: "40px"}} className="tweet--avatar" src={src} alt="tweet " />
        <h2 className="tweet--name">{name}</h2>
        <small className="tweet--handle">{handle}</small>
      </header>
      <div className="tweet--body">
        <p>{text}</p>
      </div>
      <footer>
        <small className="footer--age">{date}</small>
        <span className="footer--actions">
          <a href="#"><i class="fa fa-flag"></i></a>
          <a href="#"><i class="fa fa-retweet"></i></a>
          <a href="#"><i class="fa fa-heart"></i></a>
        </span>
      </footer>

    </article>
  )
}