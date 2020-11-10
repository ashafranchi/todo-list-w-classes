import React from "react";
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    item: "",
    items: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.submitItem = this.submitItem.bind(this)
  }

handleInputChange(event) {
  let name = event.target.name
  let value = event.target.value

  this.setState({[name]: value})

}

submitItem() {
  let items = this.state.items
  let item = this.state.item
  items.push(item)

  this.setState({items: items})
}

  render() {
  return (
    <div className="App">
      <h1>Asha's To Do List Manager!</h1>
      <h3>Add a Task Below.</h3>
      <input type="text" name="item" onChange={this.handleInputChange} ></input>
      <button className="button" onClick={this.submitItem}>Submit Item</button>
      {this.state.items.map((item) => {
        return (
          <p>{item}</p>
        )
      })}
    </div>
  );
}
}

export default App;
