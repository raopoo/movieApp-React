import React from 'react';
import './App.css';

function tweet({name,message,num}){
      return(
    <div className="tweetDiv">
      <h2>{name}</h2>
      <p>{message}</p>
      <h4>{num}</h4>
    </div>
  );
 
}

export default tweet;