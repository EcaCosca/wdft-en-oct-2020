const React = require('react');
const Layout = require('./Layout');


function Signup () {
  return(
    <Layout>
      <form action="/auth/signup" method="post">

        <label>Username: </label>
        <br />
        <input type="text" name="username" />
        <br />


        <label>Password: </label>
        <br />
        <input type="password" name="password" />
        <br />

        <label>Image: </label>
        <br />
        <input type="text" name="image" />
        <br />

        <button type="submit">Sign Up</button>

      </form>
    </Layout>
  )
}

module.exports = Signup;
