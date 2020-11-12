const React = require('react');

const Layout = require('./Layout');

const isLoggedIn = true;
const photo = "https://i.imgur.com/kdOOnTL.jpg";
// const photo = undefined;


function Conditionals () {
  return(

    <Layout>
        { photo 
            ? <img src={photo} alt=""/> 
            :  null  
        }

        {
          isLoggedIn 
            ? (
              <div> 
                <h3>Logged In</h3> 
                <p>✅</p>  
              </div>
            ) 
            : (
              <div> 
                <h3> User is Not Logged In.</h3> 
                <p>❌</p>  
              </div>
            )
        }
    </Layout>
  )
}



module.exports = Conditionals;