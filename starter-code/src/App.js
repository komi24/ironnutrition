import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';

const ListBox = props => (
  <div className="container">
    {props.foods.map(food => (<FoodBox addToBucketFromListBox={props.addToBucketFromAppComponent} food={food} key={food.name}/>))}
  </div>
)



class App extends Component {
  state = {
    foods: foods,
    showAddFoodForm: false,
    calories: '',
    name: '',
    image: '',
    search: '',
    bucket: []
  }

  toggleAddForm = () => {
    this.setState({showAddFoodForm : !this.state.showAddFoodForm})
  }

  addNewFood = () => {
    this.state.foods.push({
      name: this.state.name, 
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0
    })
    this.setState({
      foods : this.state.foods
    })
    this.toggleAddForm()
  }

  handleChange = e => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  addToBucket = (food) => {
    this.state.bucket.push(food)
    this.setState(this.state.bucket)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
        { this.state.bucket.map(f => (<li>{f.name} : {f.quantity}</li>))}
        </ul>
        <div>
          Total : {this.state.bucket.reduce((acc,f)=>acc+parseInt(f.quantity),0)}
        </div>
        <input 
          name="search"
          placeholder="Search" 
          value={this.state.search} 
          onChange={this.handleChange}/>
        {
          this.state.showAddFoodForm ? (
              <div>
                <input 
                  name="calories"
                  placeholder="calories" 
                  value={this.state.calories} 
                  onChange={this.handleChange}/>
                <input 
                  name="name"
                  placeholder="name" 
                  value={this.state.name} 
                  onChange={this.handleChange}/>
                <input 
                  name="image"
                  placeholder="image" 
                  value={this.state.image} 
                  onChange={this.handleChange}/>
                <button onClick={this.addNewFood}>Valider</button>
              </div>
            ) : ''
        }
        <button onClick={this.toggleAddForm}>Add New Food</button>
        <ListBox 
          foods={this.state.foods.filter(f => f.name.toLowerCase().includes(this.state.search.toLowerCase()))}
          addToBucketFromAppComponent={this.addToBucket}
        />
      </div>
    );
  }
}

export default App;
