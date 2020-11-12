const React = require('react');

const Layout = require('./Layout');


function Welcome( props ) {
  return(
    <Layout>
        <h1>Hello {props.name}!</h1>
        <p>Welcome to the {props.bootcamp}.</p>
      
        <img src="http://giphygifs.s3.amazonaws.com/media/FQyQEYd0KlYQ/giphy.gif" />
    </Layout>
  )
}


module.exports = Welcome;