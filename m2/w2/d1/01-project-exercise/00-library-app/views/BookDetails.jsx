const React = require("react");
const Layout = require("./Layout");

function BookDetails ( props ) {
  return(
    <Layout>
      <h1> {props.oneBook.title} </h1>

      <ul>
        <span> Written by:</span>

        { props.oneBook.authors.map( (oneAuthor, i) => {
          return (
          <li key={i}>
            <p>{oneAuthor.name} {oneAuthor.lastName}</p>
            <img src={oneAuthor.pictureUrl} width="200" alt=""/>
          </li>)
        })}
      </ul>

      <p>Summary: {props.oneBook.description}</p>

      <p>Rating: {props.oneBook.rating}/10</p>

      <a class="return-button" href="/books">
        Return
      </a>
    </Layout>
  )
}

module.exports = BookDetails;