import React from "react";
import "./App.css";

import User from "./components/User";

class App extends React.Component {
  state = {
    userA: {
      firstName: "Bob",
      avatar: "https://i.imgur.com/d1UsoDK.png",
    },
    userB: {
      firstName: "Anna",
      avatar: "https://i.imgur.com/6thUiuU.png",
    },
    clickCount: 0,
  }

  handleClickPlus = () => {
    // Update the click count
    const updatedCount = this.state.clickCount + 1;

    // Set the state to update the click count
    this.setState( { clickCount: updatedCount} );  // R I G H T !
  }

  handleClickMinus = () => {
    // Update the click count
    const updatedCount = this.state.clickCount - 1;

    // Set the state to update the click count
    this.setState( { clickCount: updatedCount } )
  }

  render() {
    
    const { userA, userB, clickCount } = this.state;

    return (
      <div className="App">
        <h1>React - state lecture</h1>

        <h3>Click Count: {clickCount}</h3>

        <button onClick={ this.handleClickPlus }> 1+ </button>
        <button onClick={ this.handleClickMinus }> -1 </button>

        <User name={userA.firstName} image={userA.avatar} />
        <User name={userB.firstName} image={userB.avatar} />
      </div>
    );
  }
}

export default App;
