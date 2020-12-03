import React, {Component} from 'react';
import './App.css';
import Clock from './components/Clock'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: 'N/A',
      showClock: true
    }

    // console.log('APP: 1 - IN CONSTRUCTOR')
  }

  toggleClock = () => {
    this.setState( { showClock: !this.state.showClock } )
  }

  updateTime = () => {
    const currentTime = new Date().toUTCString();
    this.setState({ currentTime })
  }

  render() {
    // console.log('APP: 2 - IN RENDER');
    return (
      <div className="App">
        <h1>Lifecycle Methods</h1>

        <button onClick={this.updateTime}>UPDATE CURRENT TIME</button> <br/>


        <button onClick={this.toggleClock}>TOGGLE CLOCK</button>

        <div>

        {
          this.state.showClock
            ? <Clock currentTime={this.state.currentTime} />
            : null
        }
        </div>


      </div>
    );
  }

}

export default App;
