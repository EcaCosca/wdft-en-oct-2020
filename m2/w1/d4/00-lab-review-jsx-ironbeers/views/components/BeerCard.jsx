const React = require('react');




function BeerCard(props) {
  // props = { beer: {} ,  hideExtraDetails: false }

  return (
    <a href={ "/beers/" + props.beer.id  }  >
      <div>
        <img src={props.beer.image_url} width="200" alt="" />
        <h3>{props.beer.name}</h3>
        <h5>{props.beer.tagline}</h5>
        <p>{props.beer.description}</p>

       {
         props.hideExtraDetails
            ? null
            : (
              <div>
                {
                  props.beer.food_pairing.map((str, i) => {
                    return <p key={i}> {str}</p>
                  })
                }
                <p>{props.beer.brewers_tips}</p>
              </div>

            )
       }

        
      </div>
    </a>
  );
}

module.exports = BeerCard;
