import React from "react";

function User(props) {
  return (
    //  <div style="width: 300px;  text-align: center" >  // in HTML
    <div style={{ width: "300px", textAlign: "center" }}>
      <h2> Hello, {props.name} </h2>
      <img
        src={props.image}
        alt=""
        style={{ width: "250px", height: "250px" }}
      />
    </div>
  );
}

export default User;
