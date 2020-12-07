import React from 'react';
import axios from 'axios';

// HOC is a component that takes another component as an argument
// and adds some values to that component and returns it 

function Higher (WrappedComponent) {

  const color = "SkyBlue";

  const getData = () => {
    const pr = axios.get('https://api.chucknorris.io/jokes/random')
    return pr;
  }

  return function (props) {
    return (<WrappedComponent {...props} color={color} getData={getData} />)
  }
}

export default Higher
