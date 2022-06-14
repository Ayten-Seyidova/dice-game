import { Component } from "react";
import { Button } from "../Button";
import { DiceImage } from "../DiceImage";
import { Player } from "../Player";
import { Title } from "../Title";
import './index.css';
import { image } from "../../Constant/image";
import DiceImg from "../../image/dice1.png"

export class Dice extends Component {

    constructor(props) {
        super(props);

        this.state = {
            player1: {
                firstDiceImage: "",
                secondDiceImage: "",
            },
            player2: {
                firstDiceImage: "",
                secondDiceImage: "",
            },
            disabled: false,
            score1: 0,
            score2: 0,
            winner: "",
        };
    }

    randomAttack() {
        this.setState({ winner: "", player1:{firstDiceImage: DiceImg, secondDiceImage: DiceImg}, player2:{firstDiceImage: DiceImg, secondDiceImage: DiceImg} });
        let random1 = Math.ceil(Math.random() * 6);
        let random2 = Math.ceil(Math.random() * 6);
        let random3 = Math.ceil(Math.random() * 6);
        let random4 = Math.ceil(Math.random() * 6);



        this.setState({ disabled: true });

        setTimeout(() => {
            this.setState({
                player1: {
                    firstDiceImage: image[`dice${random1}`],
                    secondDiceImage: image[`dice${random2}`]
                },
                player2: {
                    firstDiceImage: image[`dice${random3}`],
                    secondDiceImage: image[`dice${random4}`]
                }
            })
            this.setState({ disabled: false });
            let playerScore1 = random1 + random2;
            let playerScore2 = random3 + random4;

            if (playerScore1 > playerScore2) {
                this.setState({ score1: this.state.score1 + 1, winner: "Player 1 won the game" })
            } else if (playerScore1 < playerScore2) {
                this.setState({ score2: this.state.score2 + 1, winner: "Player 2 won the game" })
            } else {
                this.setState({ winner: "Draw" })
            }
        }, 2000)
    }

    render() {
        return (
            <div className="dice-section">
                <div className="dice-header">
                    <Title winner={this.state.winner} />
                    <Button disabled={this.state.disabled} randomAttack={() => { this.randomAttack() }} />
                    <div className="row mt-5">
                        <div className="col-6 player"><Player playerName="Player 1" score={this.state.score1} /></div>
                        <div className="col-6 player"><Player playerName="Player 2" score={this.state.score2} /></div>
                    </div>
                </div>
                <div className="row dice-images">
                    <div className="col-6 d-flex align-items-center justify-content-center">
                        <DiceImage disabled={this.state.disabled} diceImage={this.state.player1.firstDiceImage} />
                        <DiceImage disabled={this.state.disabled} diceImage={this.state.player1.secondDiceImage} />
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center">
                        <DiceImage disabled={this.state.disabled} diceImage={this.state.player2.firstDiceImage} />
                        <DiceImage disabled={this.state.disabled} diceImage={this.state.player2.secondDiceImage} />
                    </div>
                </div>
            </div>
        )
    }

}