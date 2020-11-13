const React = require("react");

function Signup() {
  return (
    <form action="/signup-form-data" method="POST">
      <label htmlFor="">Email</label>
      <br />
      <input type="email" name="emailAddress" />
      <br />

      <label htmlFor="">Password</label>
      <br />
      <input type="password" name="passwordStr" />
      <br />

      <button type="submit">Sign Up</button>
    </form>
  );
}

module.exports = Signup;
