import React from "react";

function CoolButton(props) {
  let classes = "button " + props.className;

  console.log("props", props);
  // { isSmall: true, isDanger: true, className: "is-rounded my-class", children: "Button 1"}

  // Dynamicaly create the classes string from the incoming props
  const propKeys = Object.keys(props);
  // [ "isSmall", "isDanger", "className", "children" ]

  const dictionary = {
    isActive: "is-active",
    isDanger: "is-danger",
    isPrimary: "is-primary",
    isRounded: "is-rounded",
    isSmall: "is-small",
    isSuccess: "is-success",
    isWarning: "is-warning",
  };

  propKeys.forEach((key) => {
    const value = dictionary[key];
    //  const value = "is-small"

    if (value) {
      classes += " " + value;
    }
  });

  return <button className={classes}>{props.children}</button>;
}

export default CoolButton;
