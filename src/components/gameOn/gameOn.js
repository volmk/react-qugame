import React, {Component} from 'react';
import Title from "../title/Title";
import Answers from "../answers/Answers";
import Info from "../info/Info";
import MenuBtn from "../menuBtn/MenuBtn";
import Questions from "../../database/questions";

class GameOn extends Component {
    constructor(props) {
        super(props);
        this.questions = new Questions()
        this.state = {
            title: this.questions.currQuestion.question,
            content: this.questions.currQuestion.content,
            totalPrize: 0,
            currPrize: 100,
            skipped: false
        }
        this.onAnswerClick = this.onAnswerClick.bind(this);
        this.onNewGameClick = this.onNewGameClick.bind(this);
        this.onSkipClick = this.onSkipClick.bind(this);
    }

    onAnswerClick(answerNum) {
        return () => {
            if (this.questions.isCorrect(answerNum)) {
                if (this.state.totalPrize + this.state.currPrize >= this.props.toWin) {
                    this.props.exitGame()
                    this.props.changeTitle(`Congratulations! You won ${this.state.totalPrize + this.state.currPrize} points`)
                } else {
                    const {question, content} = this.questions.nextQuestion()
                    this.setState(prevState => ({
                        title: question,
                        content: content,
                        totalPrize: prevState.totalPrize + prevState.currPrize,
                        currPrize: prevState.currPrize * 2,
                    }))
                }
            } else {
                this.props.exitGame()
                this.props.changeTitle(`Game over! You got ${this.state.totalPrize} points`)
            }
        }
    }

    onNewGameClick() {
        this.questions = new Questions()
        this.setState({
            title: this.questions.currQuestion.question,
            content: this.questions.currQuestion.content,
            totalPrize: 0,
            currPrize: 100,
            skipped: false
        })
    }

    onSkipClick() {
        const {question, content} = this.questions.nextQuestion()
        this.setState(prevState => ({
            title: question,
            content: content,
            skipped: true
        }))
    }

    render() {
        const title = this.state.title
        const content = this.state.content
        const totalPrize = this.state.totalPrize
        const currPrize = this.state.currPrize
        const skipped = this.state.skipped
        const exitGame = this.props.exitGame
        return (
            <div className="game">
                <Title value={title}/>
                <Answers content={content} onClick={this.onAnswerClick}/>
                <Info
                    totalPrize={totalPrize}
                    currPrize={currPrize}
                    // correctAnswer={correctAnswer}
                />
                <div>
                    <MenuBtn
                        btnText="New Game"
                        onClick={this.onNewGameClick}
                    />
                    {!skipped &&
                    <MenuBtn
                        btnText="Skip Question"
                        onClick={this.onSkipClick}
                    />
                    }
                    <MenuBtn
                        btnText="Exit"
                        onClick={exitGame}
                    />
                </div>
            </div>
        );
    }
}

export default GameOn;