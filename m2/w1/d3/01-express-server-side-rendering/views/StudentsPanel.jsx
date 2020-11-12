const React = require('react');

const Layout = require('./Layout');

const StudentCard = require('./components/StudentCard.jsx');

// `props` is how to inject data into a component
// `props` are custom attributes that we can give to the component 
//  in order to inject data to it


function StudentsPanel () {
  return (
    <Layout>
      <h1>Students Panel</h1>
      
      <StudentCard  
        fName="Uros" 
        lName="Cirkovic" 
        photo="https://i.imgur.com/h0uGpjB.jpg"
      />

      <StudentCard 
        fName="John" 
        lName="Doe" 
        photo="https://i.imgur.com/kdOOnTL.jpg"
      />
    
    </Layout>
  )
}


module.exports = StudentsPanel;