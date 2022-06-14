import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { Dice } from './Components/Dice';

class App extends Component {
  render() {
    return (
      <>
      <Dice/>
      </>
    );
  }
}

export default App;
