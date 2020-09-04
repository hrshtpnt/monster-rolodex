import React, { Component } from "react";
import { CardList } from "./Components/Card-List/Card-List.jsx";
import "./App.css";
import { Search } from "./Components/Search/Search.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monstors: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monstors: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monstors, searchField } = this.state;
    const filteredMonstors = monstors.filter((monstor) =>
      monstor.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
      <h1 className='logo-heading'>Monsters Rolodex</h1>
        <Search
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monstors={filteredMonstors} />
      </div>
    );
  }
}

export default App;
