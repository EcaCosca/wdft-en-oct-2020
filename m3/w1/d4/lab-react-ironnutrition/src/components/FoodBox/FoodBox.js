import React from 'react';

class FoodBox extends React.Component {
   state = {
       quantity: 1
   }

  handleQuantityInput = (event) => {
    const { value, name } = event.target;

    this.setState( { [name]: value }); // updated the state `quantity` field
  };

  handleAddFood = () => {
    // Get the quantity and the food object
    const dish = { 
        quantity: this.state.quantity,
        name: this.props.dish.name,
        calories: this.props.dish.calories,
    }
    // Send those values to App and add it on the `today` list
    this.props.addFood( dish );
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.dish.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.dish.name}</strong> <br />
                <small>{this.props.dish.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">

                <input
                  className="input"
                  type="number"
                  name="quantity"
                  value={this.state.quantity}
                  onChange={this.handleQuantityInput}
                />

              </div>
              <div className="control">
                <button onClick={this.handleAddFood} className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
export default FoodBox;
