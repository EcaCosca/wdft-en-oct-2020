const React = require('react');
const getContent = require('./../utils/get-content');

const Layout = require('./Layout');

const obj = {
  name: 'John',
  city: 'Greenock',
  bootcamp: 'WebDev'
}

const users = ['Bob', 'Sarah', 'Anna', 'Uros'];


// TEMPLATE/VIEW 
function About() {

  return(
        <Layout>
          <h4> { obj.name } </h4>
          <h4> { obj.city } </h4>
          <h4> { obj.bootcamp } </h4>

          <p> First User: { users[0] } </p>
          <p> Last User: { users[3] } </p>
          <h3> {  getContent('es')  }  </h3>
        </Layout>

  )

}

// WE MUST EXPORT THE TEMPLATE/VIEW FUNCTION
module.exports = About;