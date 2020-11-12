const React = require('react');

const BeerCard = require('./components/BeerCard');

const Layout = require('./Layout');


function RandomBeer(props) {
  // props = {  oneBeer: { ... }  }

  return (
    <Layout>
      <BeerCard beer={ props.oneBeer} hideExtraDetails={false} />
    </Layout>
  );
}








module.exports = RandomBeer;
