import React, { Component } from 'react';
import { QuizContext } from '../contexts/QuizContext';

class Quiz extends Component {
    static contextType = QuizContext;

    render() {
        const { quizData, handleCorrect, handleIncorrect, handleNextQuestion, questionNumber, incorrect, score } = this.context;

        let object = quizData[questionNumber];

        let question = object.question;
        let correct = object.correct;
        let wrongOne = object.wrongOne;
        let wrongTwo = object.wrongTwo;

        let winningMessage;

        if (score > 0) {
            winningMessage = 'Yayy'
        } else if (incorrect > 0) {
            winningMessage = 'twat'
        } else {
            winningMessage = null;
        }

        return (
            <div >
                <h2>{question}</h2>

                <div className="section">

                    <h3 onClick={handleIncorrect} for="male">{wrongOne}</h3>

                    <h3 onClick={handleCorrect} for="female">{correct}</h3>

                    <h3 onClick={handleIncorrect} for="other">{wrongTwo}</h3>

                </div>

                <h1>{winningMessage}</h1>

                {winningMessage === 'Yayy' ?
                <h2 onClick={handleNextQuestion}>Next Question</h2>
                : null}


            </div>
        )
    }
}

export default Quiz;