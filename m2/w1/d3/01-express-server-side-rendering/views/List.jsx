const React = require('react');

const Layout = require('./Layout');

const cities = ['Barcelona', 'Paris', 'Berlin', 'Miami', 'Sao Paolo'];


const beers = [
  { beerName: 'Estrella D', description: 'Good stuff', rating: 10 },
  { beerName: 'Corona', description: 'Hmmmm', rating: 3 },
  { beerName: 'Heineken', description: 'Like it', rating: 9 },
]

function List () {
 return (

  <Layout>
      {
        beers.map( (beerObj, i) => {
            return (
              <div key={i} className="beer-container">
                <h2>Beer name: {beerObj.beerName} </h2>
                <h4>Description: {beerObj.description}</h4>
                <h4>Rating: {beerObj.rating}</h4>
              </div>
            )
        })
      }

      {
        cities.map( (cityStr, i) => {
          return  <p key={i}>   {cityStr}   </p>
        })
      }

  </Layout>
 )
}

module.exports = List;