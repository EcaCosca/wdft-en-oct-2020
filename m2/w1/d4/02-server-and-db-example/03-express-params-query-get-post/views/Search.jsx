const React = require("react");

function Search() {
  return (
    <form action="/search-form-data" method="GET">
      <input type="text" name="searchString" placeholder="Look for..." />
      <br />
      <button type="submit">Search</button>
    </form>
  );
}

module.exports = Search;
