import React, { createContext, Component } from 'react';

export const QuizContext = createContext();

class QuizContextProvider extends Component {
    state = {
        quizData: 
        [
            {
                question: 'Which song gave The Beatles their first US No.1 hit?',
                correct: 'I Want to Hold Your Hand',
                wrongOne: 'She Loves You',
                wrongTwo: 'Cha Cha Slide'
            },
            {
                question: 'Which film featured the Simon & Garfunkel 1968 No.1 hit "Mrs. Robinson"?',
                correct: 'The Graduate',
                wrongOne: 'Bill & Teds Excellent Adventure',
                wrongTwo: 'The Odd Couple'
            },
        ],
        score: null,
        incorrect: null,
        questionNumber: 0,

    }

    handleCorrect= (e) => {
        let correct = this.state.score + 1;

        this.setState({
            score: correct,
        });
    }

    handleIncorrect= (e) => {
        let incorrect = this.state.incorrect + 1;

        this.setState({
            incorrect: incorrect,
        });
        e.preventDefault();

    }

    handleNextQuestion= (e) => {
        let nextQuestion = this.state.questionNumber + 1;

        this.setState({
            questionNumber: nextQuestion,
        });
        e.preventDefault();

    }

    render() {

        return (
            <QuizContext.Provider value={{
                ...this.state,
                handleCorrect: this.handleCorrect,
                handleIncorrect: this.handleIncorrect,
                handleNextQuestion: this.handleNextQuestion,

            }}>

                {this.props.children}
            </QuizContext.Provider>
        );
    }
}

export default QuizContextProvider;