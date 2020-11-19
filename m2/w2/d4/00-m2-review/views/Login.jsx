const React = require('react');
const Layout = require('./Layout');


function Login () {
  return(
    <Layout>
      <form action="/auth/login" method="post">

        <label>Username: </label>
        <br />
        <input type="text" name="username" />
        <br />


        <label>Password: </label>
        <br />
        <input type="password" name="password" />
        <br />

        <button type="submit">Login</button>

      </form>
    </Layout>
  )
}

module.exports = Login;
