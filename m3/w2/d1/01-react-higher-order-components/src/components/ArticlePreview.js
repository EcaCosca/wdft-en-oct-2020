import React, { Component } from 'react';
import Higher from './../hoc/Higher';


class ArticlePreview extends Component {
  state = {
    title: undefined,
    description: undefined,
    content: undefined
  }

  componentDidMount() {
    const { title, description } = this.props;
    this.setState({ title, description });
  }


  loadMore = () => {
    // this.setState({ content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nihil iste itaque eum fuga autem neque nemo qui inventore voluptas! Delectus dicta aliquam sint a! Aut voluptates laboriosam vitae repellendus." })
    this.props.getData()
      .then( (response) => {
        this.setState( { content: response.data.value } )
      })
      .catch( (err) => console.log(err));
  }


  render() {
    return (
      <div className="article-preview" style={{ background: this.props.color }}>
        <h3>{this.state.title ? this.state.title : null}</h3>
        <p>{this.state.description ? this.state.description : null}</p>

          {
            this.state.content
              ? <p>{this.state.content}</p>
              : <div className="fade">
                  <button className="btn-more" onClick={this.loadMore}>More</button>
                </div>
          }
      </div>
    )
  }
}


const EnhancedArticlePreview = Higher(ArticlePreview)

export default EnhancedArticlePreview;






// export default ArticlePreview;
