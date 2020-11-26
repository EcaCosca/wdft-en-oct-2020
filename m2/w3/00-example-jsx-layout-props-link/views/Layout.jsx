const React = require("react");

function Layout(props) {
  // props = { title: "Profile Page", pageCSS: "/stylesheets/profile.css"}
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> {props.title ? props.title : "My App"} </title>

        <link rel="stylesheet" href="/stylesheets/style.css" />

        {props.pageCSS ? <link rel="stylesheet" href={props.pageCSS} /> : null}
      </head>

      <body>{props.children}</body>
    </html>
  );
}

module.exports = Layout;
