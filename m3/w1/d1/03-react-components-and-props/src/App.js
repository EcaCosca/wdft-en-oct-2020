import React from "react";
import "./App.css"; // CSS files are loaded directly into the .js file

import WelcomeComponent from "./WelcomeComponent";
import User from "./User";

import ReactPlayer from 'react-player'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React!</h1>

        <WelcomeComponent city="Barcelona" />

        <User 
          name="Sarah" 
          image="https://i.imgur.com/T4EpAg6.png" 
        />

        <User 
          name="Ana" 
          image="https://i.imgur.com/6thUiuU.png" 
        />

        <ReactPlayer url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"  playing  controls  volume={0.1} />
        {/* 

        <ReactPlayer url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"  playing={true} controls={true} volume={0.1} /> 
        */}

        <ReactPlayer url="https://vimeo.com/channels/top/76979871"  controls />



      </div>
    );
  }
}

export default App;
