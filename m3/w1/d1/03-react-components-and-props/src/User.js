// rfce + Tab

import React from "react";

import ProfileImage from './ProfileImage';

function User(props) {
  return (
    <div className="user">
      
      <ProfileImage profileImage={props.image} />

      <h2>Hello {props.name} </h2>
    </div>
  );
}

export default User;

// Function components are a light weight version of components
// - They can receive props

// - they don't have `state` object
// - they don't have lifecycle methods
