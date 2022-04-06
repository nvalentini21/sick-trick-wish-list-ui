import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tricks: []
    }
  }

  componentDidMount = () => {
    this.fetchData('tricks')
  }

  componentDidUpdate = () => {
    console.log(this.state.tricks)
  }


  fetchData = (url) => {
    return fetch(`http://localhost:3001/api/v1/${url}`)
      .then(response => response.json())
      .then(data => {
        this.setState({tricks: data})
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
      </div>
    );
  }
}

export default App;
