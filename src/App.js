import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { image } from "./Constant/image";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstDiceImage: "",
      secondDiceImage: "",
    };
  }

  randomAttack() {
    let randomFirst = Math.ceil(Math.random() * 6);
    let randomSecond = Math.ceil(Math.random() * 6);

    console.log(randomFirst);
    console.log(randomSecond);

    this.setState({
      firstDiceImage: image[`dice${randomFirst}`],
      secondDiceImage: image[`dice${randomSecond}`]
    })
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <img src={this.state.firstDiceImage} className="m-auto d-block" width={100} />
          </div>
          <button className="btn btn-primary col-2" onClick={() => this.randomAttack()}>Shake Dice</button>
          <div className="col-5">
            <img src={this.state.secondDiceImage} className="m-auto d-block" width={100} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
