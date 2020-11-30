import React from 'react';


class List extends React.Component {
  render() {
    return(
      <div className="ListComponent">
        <h5>This is my List Component</h5>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
    </div>
    )
  }
}

export default List;