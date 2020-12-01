import React from "react";

function List(props) {
  return (
    <ul>
      {props.projectsList.map((projectObj) => {
        return (
          <li key={projectObj._id} style={{ border: "1px solid black" }}>
            <p>{projectObj.name}</p>
            <p>{projectObj.techStack}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
