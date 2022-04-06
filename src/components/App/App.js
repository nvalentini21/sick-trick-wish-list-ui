import { Component } from 'react';
import './App.css';
import Tricks from '../Tricks/Tricks'
import Form from '../Form/Form'

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
      <main className="App">
        <h1>Sick Trick Wish List</h1>
        <Form />
        <Tricks tricks={this.state.tricks}/>
      </main>
    );
  }
}

export default App;
