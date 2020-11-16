const React = require("react");
const Layout = require("./Layout");

function Tracks(props) {
  return (
    <Layout title="Tracks!" hideNav={true}>
      <h1>Tracks</h1>

      {props.tracks.map((trackObj, i) => {
        return (
          <div key={i} class="track">
            <span>{trackObj.name}</span>

            {trackObj.preview_url ? (
              <div>
                <p>Preview URL exists !!!</p>
                <audio controls></audio>
              </div>
            ) : (
              <p>NOTHING FOUND</p>
            )}
          </div>
        );
      })}
    </Layout>
  );
}

module.exports = Tracks;
