import { Component } from "react";
import './index.css';
import DiceImg from "../../image/dice1.png"

export class DiceImage extends Component {

    render() {
        return (
            <>
                <img className={`dice-img ${this.props.disabled && 'animate'}`}  src={this.props.diceImage ? this.props.diceImage : DiceImg}/>
            </>
        )
    }

}