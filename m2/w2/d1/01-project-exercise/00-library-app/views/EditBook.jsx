const React = require("react");
const Layout = require("./Layout");

function EditBook(props) {
  return (
    <Layout>
      <form action={`/books/edit?bookid=${props.oneBook._id}`} method="POST">
        <label>Title:</label>
        <input type="text" name="title" defaultValue={props.oneBook.title} />
        <br />

        <label>Author:</label>
        <input type="text" name="author" defaultValue={props.oneBook.author} />
        <br />

        <label>Description:</label>
        <input type="text" name="description" defaultValue={props.oneBook.description} />
        <br />

        <label>Rate:</label>
        <input type="number" name="rating" defaultValue={props.oneBook.rating}/>
        <br />

        <button className="edit-button" type="submit">
          EDIT
        </button>
      </form>
    </Layout>
  );
}

module.exports = EditBook;