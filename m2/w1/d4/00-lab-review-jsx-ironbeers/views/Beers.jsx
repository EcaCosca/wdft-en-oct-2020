const React = require('react');

const Layout = require('./Layout');

const BeerCard = require('./components/BeerCard');

function Beers ( props ) {
    return (
        <Layout>
             <div>
        {/* We are maping over the beersFromApi array we received */}
        { 
          props.beersFromApi.map( (beerObj, i) => {
            return (
              <BeerCard beer={beerObj} hideExtraDetails={true} />
            );
          })
        }
      </div>
        </Layout>
    )
};

module.exports = Beers;