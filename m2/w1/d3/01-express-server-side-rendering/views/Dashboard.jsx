const React = require('react');

const Layout = require('./Layout');

const UserProfile = require('./components/UserProfile');

// Complete the function component returning the HTML
function Dashboard() {
  return(
    
    <Layout>
      <div>
        <h1>Dashboard</h1>

        <UserProfile 
          name="Bill Gates" 
          linkedinUrl="https://www.linkedin.com/in/williamhgates/" 
          profilePhoto="https://i.imgur.com/sSoDxLe.jpg"
        />
        
        <UserProfile 
          name="Maggie Appleton" 
          linkedinUrl="https://www.linkedin.com/in/maggieappleton/" 
          profilePhoto="https://i.imgur.com/uRvE7z3.jpg"
        />

      </div>
    </Layout>
  )
}

module.exports = Dashboard;