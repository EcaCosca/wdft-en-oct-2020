const React = require('react');

function Layout( props ) {
  return(
    <html lang="en">

    <head>
      <meta charSet="utf-8" />
      <title> Home </title>
      <link rel="stylesheet" href="/css/style.css" />
    </head>

    <body>
      <nav>
          <div>
            <img src="https://i.imgur.com/RP5vFgT.png" width="100px" alt="" />
            <p>User's name</p>
          </div>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
      </nav>

      { props.children }

    </body>
  </html>
  )
}


module.exports = Layout;