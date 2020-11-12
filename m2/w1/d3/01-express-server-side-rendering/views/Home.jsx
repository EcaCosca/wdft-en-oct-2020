const React = require('react');

const Layout = require('./Layout');

function Home () {
  return(
    <Layout>
        <h1 className="title" > Ironhackers Be Like</h1>
        <img src="https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif" alt=""/>
    </Layout>

  )
}

// JSX syntax rules:
// 1. Self closing tags must have a slash at the end:  img , link , br, meta
// 2. Some attribute names are slightly different than HTML:  className, charSet
// 3. HTML returned from the function must have 1 main enclosing element. Other
//      elements can be nested inside


module.exports = Home;