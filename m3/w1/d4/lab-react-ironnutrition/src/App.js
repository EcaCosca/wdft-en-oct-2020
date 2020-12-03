import React from 'react'
import FoodBox from './components/FoodBox/FoodBox';
import AddNewFood from './components/AddNewFood/AddNewFood';
import foods from './foods.json';
import './App.css';
import 'bulma/css/bulma.css';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  state = {
    foods,            // main list of food       [   banana , bacon , hamburger , bread , milk ]
    foodList: foods,  // list of food to show    [   banana , bacon  ]
    isDisplayed: false,
    today: []
  }

  addOneDish = (newDish) => {
    // Add new dish to the array
    const updatedDishes = [newDish, ...this.state.foods];
    // Update the state
    this.setState({ foods: updatedDishes, foodList: foods });
  }

  showForm = () => {
    this.setState({
      isDisplayed: !this.state.isDisplayed,
    });
  };

  filterFoods = (input) => {

    const filtered = this.state.foods.filter((food) => {  // [   banana , bacon  ]
      const foodName = food.name.toLowerCase();
      const searchInput = input.toLowerCase();
      
      return foodName.includes(searchInput);
      // return food.name.toLowerCase().includes( input.toLowerCase() )
    })

    this.setState( { foodList: filtered } );
  }

  addFood = (dish) => {
    const todayUpdated = [...this.state.today, dish];

    this.setState( { today: todayUpdated } )
  }


  render() {
    const { today, foodList, isDisplayed } = this.state;
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <SearchBar filterFoods={this.filterFoods} />        

        <div className="columns">
          <div className="column">
            <button type onClick={this.showForm}>Show</button>
            {isDisplayed
              ? <AddNewFood createNewDish={this.addOneDish} />
              : null
            }
          </div>

          <div className="column">
            <div>
              {foodList.map((dish, index) => {
                return <FoodBox key={index} dish={dish} addFood={this.addFood} />
              })}
            </div>
          </div>

          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              {today.map((food) => {
                 return <p>{food.quantity} {food.name} = { food.quantity * food.calories}  cal</p> 
              })}
            </ul>
            <strong>Total: {today.reduce((total, food) => (food.calories * food.quantity) + total , 0)}</strong>
          </div>
        </div>
      </div>
    )
  }
}
export default App;