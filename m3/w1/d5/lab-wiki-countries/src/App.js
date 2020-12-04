import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';


class App extends React.Component {
  state = {
    countries: []
  }

  render() {
    console.log('APP: RENDER');
    console.log('APP: this.state', this.state);
    
    return (
      <div className="App">
        <Navbar />
        <CountriesList countries={this.state.countries} />
        
        {/* <Route exact path="/:countryId" component={CountryDetails} /> */}

        <Route exact path="/:countryId" render={ (reactRouterProps) => <CountryDetails countries={this.state.countries} {...reactRouterProps} />   } />
      
      </div>
    );
  }

  componentDidMount() {
    console.log('APP: COMPONENT DID MOUNT');

    // fetch('https://countries.tech-savvy.tech/countries') // GET
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({ countries: data })
    //   })

    axios.get('https://countries.tech-savvy.tech/countries') // GET
      .then((response) =>  this.setState({ countries: response.data }))
  }
}

export default App;
