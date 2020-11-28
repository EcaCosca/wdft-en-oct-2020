const React = require("react");
const Layout = require("./Layout");

function Countries(props) {
  return (
    <Layout>
      <h1> List Of Countries:</h1>
      {props.countriesArr.map((countryObj, i) => {
        return (
          <div key={i}>
            <h3>{countryObj.name}</h3>
            <p>{countryObj.capital}</p>
          </div>
        );
      })}
    </Layout>
  );
}

module.exports = Countries;
