import React, { Component } from 'react';
import Higher from './../hoc/Higher';
import withTheme from './../hoc/withTheme';



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
    this.props.getData()
      .then( (response) => {
        this.setState( { content: response.data.value } )
      })
      .catch( (err) => console.log(err));
  }

  render() {
    return (
      <div className="article-preview" style={this.props.style}>
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



// exports = { ArticlePreview, EnhancedArticlePreview }

