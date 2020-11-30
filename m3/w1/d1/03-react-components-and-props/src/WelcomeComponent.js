// rcc + Tab
import React, { Component } from "react";

class WelcomeComponent extends Component {
  render() {
    return (
      <div className="welcome">
        <h1>..:: Welcome Component ::..</h1>
        <h2>Welcome to {this.props.city} </h2>
      </div>
    );
  }
}

export default WelcomeComponent;

// Class components provide more features than function components
// Class components have:
//    - state,
//    - render method,
//    - life-cycle methods (used to do something with the component depending if
// on the state of the component - once it loads, updates, before it unloads)
