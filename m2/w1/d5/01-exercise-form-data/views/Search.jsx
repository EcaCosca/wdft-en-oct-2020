const React = require("react");

function Search() {
  return (
    <form action="/search" method="GET">
      <input type="text" name="search" placeholder="Look for..." />
      <br />

      <button type="submit">Search</button>
    </form>
  );
}

module.exports = Search;
