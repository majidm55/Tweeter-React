import React, { useState } from 'react';
import './App.css';
import { Navigation } from './Navigation';
import { TweetForm } from './TweetForm';
import { Tweet } from './Tweet';


const initialTweetsData = [
  {
    name:"Francis",
    handle:"@cadei",
    profile_image:"https://cdn.thearthunters.com/wp-content/uploads/old/201206193/3.jpg",
    text:"What do you think about dragons?",
    date:"10 days ago"
  },
  {
    name:"Majid",
    handle:"@Shadei",
    profile_image:"https://cdn.thearthunters.com/wp-content/uploads/old/201206193/5.jpg",
    text:"What do you think about pizza?",
    date:"8 days ago"
  },
  {
    name:"Mooojid",
    handle:"@Lhadei",
    profile_image:"https://cdn.thearthunters.com/wp-content/uploads/old/201206193/9.jpg",
    text:"What do you think about Mando?",
    date:"1 days ago"
  }

]

function App() {
  const [tweetData, setTweets] = useState(initialTweetsData)
  const tweets = tweetData.map((tweetData, index) => {
    return <Tweet 
    key={index}
    name={tweetData.name} 
    src={tweetData.profile_image}
    handle={tweetData.handle}
    text={tweetData.text}
    date={tweetData.date}
    />
  })

  const addNewTweet = () => {
    const newTweet = {
      
        name:"Ann",
        handle:"@Smhadei",
        profile_image:"https://cdn.thearthunters.com/wp-content/uploads/old/201206193/13.jpg",
        text:"What do you think about Grilled Cheese?",
        date:"0 days ago"
      
    }
    setTweets([newTweet, ...tweetData]);
  }

  return (
    <div className="App" >
      <Navigation />
      <TweetForm />
      <section className="tweets">
        {tweets}
      </section>
    </div>
  );
}

export default App;
