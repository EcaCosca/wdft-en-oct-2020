const React = require("react");

function Signup() {
  return (
    <form action="/signup-form-data" method="POST">
      <label>Email</label>
      <br />
      <input type="email" name="Email" placeholder="Enter Email" />
      <br />

      <label>Password</label>
      <br />
      <input type="password" name="Password" placeholder="Enter Password" />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

module.exports = Signup;
