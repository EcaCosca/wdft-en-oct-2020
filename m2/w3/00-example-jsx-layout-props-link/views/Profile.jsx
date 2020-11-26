const React = require("react");
const Layout = require("./Layout");

function Profile() {
  return (
    <Layout title="Profile Page" pageCSS="/stylesheets/profile.css">
      <h1>Profile Page</h1>

      <img src="https://i.imgur.com/OH7dtc0.png" alt="" />
      <h2>User: Bob</h2>
      <h3>City: Barcelona</h3>
    </Layout>
  );
}

module.exports = Profile;
