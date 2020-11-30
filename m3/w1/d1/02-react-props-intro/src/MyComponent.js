import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Sarah",
  };

  render() {
    return (
      <div className="MyComponent">
        <p>Hello {this.state.name}</p>
        <p> Welcome to {this.props.city} </p>

      </div>
    );
  }
}

export default MyComponent;

// `state` represents the data that is private to every class component
// (it stores data that only the component can access and change)

// props represent the atributtes set on the component 
//and are used to pass data to the component from the outside (from it's parent)

