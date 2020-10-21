import React, {Component} from 'react';
import './App.css';
import GameOn from "../gameOn/gameOn";
import GameOff from "../gameOff/gameOff";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameOn: false,
            title: 'Welcome to The Game'
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.startGame = this.startGame.bind(this);
        this.exitGame = this.exitGame.bind(this);

        this.toWin = 1000000
    }

    changeTitle(newTitle) {
        this.setState({title: newTitle})
    }

    startGame(){
        this.setState({gameOn: true})
    }

    exitGame(){
        this.setState({gameOn: false, title: 'Welcome to The Game'})
    }



    render() {
        const {gameOn} = this.state

        return (
            <div className="app">
                {gameOn
                    ? <GameOn
                        exitGame={this.exitGame}
                        changeTitle={this.changeTitle}
                        toWin={this.toWin}
                    />
                    : <GameOff
                        startGame={this.startGame}
                        title={this.state.title}
                        toWin={this.toWin}
                    />}
            </div>
        );
    }
}

export default App;
