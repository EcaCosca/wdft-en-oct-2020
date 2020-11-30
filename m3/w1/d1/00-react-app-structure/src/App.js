// import React
// const React = require('react'); // require() used only in Node

import React from 'react';  // import used in ES6
import Profile from './Profile';
import List from './List'

import './App.css';


class App extends React.Component {
  render() {
    return(
      <div className="App">
        <h1>Hello Ironhackers</h1>
        <h3>React Intro</h3>
        <Profile />

        <List />
        <List />
        <List />
         
      </div>
    )
  }
}


// export the component
export default App;