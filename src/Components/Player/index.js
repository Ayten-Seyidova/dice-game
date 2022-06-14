import { Component } from "react";

export class Player extends Component {
    render() {
        return (
            <>
                <h2>{this.props.playerName}</h2>
                <p>Score: {this.props.score}</p>
            </>
        )
    }
}