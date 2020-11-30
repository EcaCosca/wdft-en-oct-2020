import React from "react";

const user = {
  firstName: "Uros",
  lastName: "Cirkovic",
  image: "https://i.imgur.com/iFe8f8v.jpg",
  catchphrase: "Verbose...",
};

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const h2Tag = <h2> {user.catchphrase} </h2>;

class Example extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello {formatName(user)} </h1>
        <h3>Welcome to Ironhack</h3>

        <img src={user.image} alt="" />

        {h2Tag}
      </div>
    );
  }
}

export default Example;
