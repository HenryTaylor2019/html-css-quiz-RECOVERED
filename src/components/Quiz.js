import React, { Component } from 'react';
import { QuizContext } from '../contexts/QuizContext';

class Quiz extends Component {
    static contextType = QuizContext;

    render() {
        const { quizData, handleCorrect, handleIncorrect, questionNumber, handleReset, incorrect, score } = this.context;

        let object = quizData[questionNumber];

        let question = object.question;
        let correct = object.correct;
        let wrongOne = object.wrongOne;
        let wrongTwo = object.wrongTwo;

        // let winningMessage;

        // if (score > 0) {
        //     winningMessage = 'Yayy'
        // } else if (incorrect > 0) {
        //     winningMessage = 'twat'
        // } else {
        //     winningMessage = null;
        // }

        // let answer;

        // if (questionNumber % 2 === 0) {
        //     answer = correct
        // } else if (questionNumber % 2 !== 0) {
        //     answer = wrongOne
        // } else {
        //     answer = wrongTwo
        // }

        return (
            <div >
                <button onClick={handleReset}>Home</button>

                <h3>{score} out of 10</h3>

                <h2>{question}</h2>

                <div className="section">

                    <h3 onClick={handleIncorrect}>{wrongOne}</h3>
                    <h3 onClick={handleCorrect}>{correct}</h3>
                    <h3 onClick={handleIncorrect}>{wrongTwo}</h3>

                </div>

                {/* <h1>{winningMessage}</h1> */}

{/* 
                <div>
                    <h3 onClick={handleNextQuestion}>Next Question</h3>
                </div> */}


            </div>
        )
    }
}

export default Quiz;