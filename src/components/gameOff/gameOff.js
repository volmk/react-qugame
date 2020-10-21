import React, {Component} from 'react';
import Title from "../title/Title";
import MenuBtn from "../menuBtn/MenuBtn";
import './gameOff.css'
import Rules from "../rules/Rules";

class GameOff extends Component {
    constructor(props) {
        super(props);
        this.onRulesClick = this.onRulesClick.bind(this);
        this.state = {
            showRules: false
        }
    }

    onRulesClick() {
        this.setState(prevState => ({showRules: !prevState.showRules}))
    }

    render() {
        const title = this.props.title
        const startGame = this.props.startGame
        return (
            <div className="game">
                <Title value={title}/>
                {this.state.showRules && <Rules toWin={this.props.toWin}/>}
                <div>
                    <MenuBtn
                        btnText="New Game"
                        onClick={startGame}
                    />
                    <MenuBtn
                        btnText={this.state.showRules ? "Hide rules" : "Show rules"}
                        onClick={this.onRulesClick}
                    />
                </div>
            </div>
        )
    }
}

export default GameOff;