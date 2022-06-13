import { Component } from "react";

export class Title extends Component {

    render() {
        return (
            <>
                <h1 className="h1 text-white font-weight-light ">DICE GAME</h1>
                <p>{this.props.winner ? this.props.winner + ' won the game' : 'DICE GAME'}</p>
            </>
        )
    }

}