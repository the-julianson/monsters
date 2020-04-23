import React, { Component } from "react";
import { Cardlist } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import './App.css';

const mockApi = "https://jsonplaceholder.typicode.com/users";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch(mockApi)
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // need to use arrow function so the class App binds this method at the moment it instantiates the class. 
  // otherwise we would have to use this.handleChange = this.handleChange.bind(this)
  handleChange = (e) => (
    this.setState({ searchField: e.target.value })
  )

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        )

    return (
      <div className="App">
        <h1>Monsters finder!</h1>
        <SearchBox 
        placeholder="search your monster"
        handleChange={this.handleChange}
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
