import React from 'react'
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  const countryId = props.match.params.countryId

  const foundCountry = props.countries.find((country) => {
    return country.cca3 === countryId;
  });

  return (
    
      <div className="col-7">
            <h1>{foundCountry && foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{foundCountry && foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{foundCountry && foundCountry.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                  <ul>
                  {foundCountry && foundCountry.borders.map((border, i) => {

                    const borderId = border;
                    const borderCountry = props.countries.find((country) => {
                      return country.cca3 === borderId;
                    });


                    return (
                      <li>
                        <Link key = {i} to={`/${border}`}>{borderCountry.name.common}</Link>
                      </li>
                    );
                  })}
                </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    
  )
}

export default CountryDetails
