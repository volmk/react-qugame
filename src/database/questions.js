import questionsOriginal from './questionsOriginal'

class Questions {
    constructor() {
        this.questions = [...questionsOriginal]
        this._shuffle(this.questions)
        this.currQuestion = this.questions.pop()
        console.log(this.currQuestion.correct)
    }

    _shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    nextQuestion() {
        this.currQuestion = this.questions.pop()
        console.log(this.currQuestion.correct)
        return {
            question: this.currQuestion.question,
            content: this.currQuestion.content
        }
    }

    isCorrect = (answerNumber) => this.currQuestion.correct === answerNumber

}

export default Questions;
