import React, { Component } from 'react'

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      year: undefined,
      timer: 0,
      timerId: null
    }

    console.log('CLOCK: 1 - IN CONSTRUCTOR')
  }

  updateTimer = () => {
    this.setState( { timer: this.state.timer + 1 } )
  }
  
  render() {
    console.log('CLOCK: 2 - IN RENDER');
    // Don't call this.setState() in `render()` block - it will cause infinite re-render
    return (
      <div style={{ border: "2px solid purple"}}>
        <h1>Clock</h1>
        <h4>Year: {this.state.year}</h4>

        <p>Current Time: {this.props.currentTime}</p>
        <h4>Timer: {this.state.timer}</h4>
      </div>
    )
  }

  // MOUNTING
  componentDidMount() {
    console.log('CLOCK: 3 - IN COMPONENT DID MOUNT');
    /* Our code that we want to run right after intial `render` is finishes
    and component is mounted/displayed to the DOM
    Common use is setting the initial state of the component:
    1. - Set the values coming from `props` to the `state`
    2. - Create an initial call to an API, and set data from API to the `state`
    */
   // this.setState( { year: this.props.currentYear } );  // 1.

    fetch('http://worldclockapi.com/api/json/est/now')  // 2.
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
        const yearStr = data.ordinalDate;
        // Start timer interval
        const intervalId = setInterval( this.updateTimer, 1000);

        this.setState({ year: yearStr, timerId: intervalId })
      })
    
  }
  
  // UPDATE
  componentDidUpdate(prevProps, prevState) {
    console.log('CLOCK: COMPONENT DID UPDATE!');
    // Calling `this.setState` will cause the component to re-render. Potential infinte re-rendering
    // Used to do a comparison of the prevProps and prevState and then do something accordingly
    // and to optimize when the component should be updated
    if (prevProps.currentTime !== this.props.currentTime) {
      console.log('RECEIVED NEW TIME, YAAY!');
      
    }
  }

  // UNMOUNTING
  componentWillUnmount(){
    // componentWillUnmount is invoked right before the component is unmounted/destroyed from the DOM
    // It is used to perform necesarry clean up of any processes running in the component
    // such as timers, intervals, ongoing network request ... to prevent memory leaking
    console.log('\n XXX  IN "COMPONENT WILL UNMOUNT"  XXX');
    clearInterval(this.state.timerId);
  }

}

export default Clock;