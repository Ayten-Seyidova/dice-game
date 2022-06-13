import { Component } from "react";

export class Button extends Component {

    render() {
        return (
            <button className="btn btn-secondary" onClick={this.props.randomAttack} disabled={this.props.disabled && true}>{this.props.disabled ? 'Rolling...' : 'Go Roll'}</button>
        )
    }

}