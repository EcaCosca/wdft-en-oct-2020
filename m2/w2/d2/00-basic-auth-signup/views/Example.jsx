const React = require('react');
const Layout = require('./Layout');


function Example(props) {
  return(
    <Layout>

      <h1>Stuff that Everyone Sees</h1>

      { props.userIsLoggedIn 
          ? <img width='200' src="https://st.depositphotos.com/1000128/1851/i/950/depositphotos_18514713-stock-photo-stacks-of-gold-bars.jpg" alt=""/>
          : null
      }

    </Layout>
  )
}


module.exports = Example;