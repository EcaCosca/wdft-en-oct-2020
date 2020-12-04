import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import CountryDetails from './CountryDetails'

class CountriesList extends Component {
  render() {
    console.log('COUNTRIES-LIST: RENDER');
    console.log('COUNTRIES-LIST: this.props', this.props);
    
    return (
      
      <div className="col-5">
          <div className="list-group">
        
        {this.props.countries.map((country) => {
          return (
            <div  key={country.cca3}
              className="list-group-item list-group-item-action">
            
              <Link to={`/${country.cca3}`}>
                <h4>{country.flag}{country.name.common}</h4>
              </Link>
              </div> 

              

          );
        })}
        </div>
      </div>
    );
  }
}

export default CountriesList;
