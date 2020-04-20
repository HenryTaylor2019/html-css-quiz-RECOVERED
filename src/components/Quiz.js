import React, { Component } from 'react';
import { QuizContext } from '../contexts/QuizContext';

class Quiz extends Component {
    static contextType = QuizContext;

    render() {
        const { quizData, handleCorrect, handleIncorrect, questionNumber } = this.context;

        let object = quizData[questionNumber];

        let question = object.question;
        let correct = object.correct;
        let wrongOne = object.wrongOne;
        let wrongTwo = object.wrongTwo;
        // let currentScore = questionNumber !== 0 ? score : 0;
        let currentQuestion = questionNumber + 1;

        return (
            <div className="main">

                <div className="question-section">
                    <h2>{question}</h2>
                </div>

                {/* Conditional to swap answers around - more elegant solution needed */}
                {questionNumber % 2 === 0 && questionNumber < 5 ?
                    <div className="section">
                        <h3 onClick={handleIncorrect}>{wrongOne}</h3>
                        <h3 onClick={handleCorrect}>{correct}</h3>
                        <h3 onClick={handleIncorrect}>{wrongTwo}</h3>
                    </div>
                    : questionNumber % 3 === 0 && questionNumber < 5 ?
                        <div className="section">
                            <h3 onClick={handleCorrect}>{correct}</h3>
                            <h3 onClick={handleIncorrect}>{wrongOne}</h3>
                            <h3 onClick={handleIncorrect}>{wrongTwo}</h3>
                        </div>
                        :
                        <div className="section">
                            <h3 onClick={handleIncorrect}>{wrongOne}</h3>
                            <h3 onClick={handleIncorrect}>{wrongTwo}</h3>
                            <h3 onClick={handleCorrect}>{correct}</h3>
                        </div>
                }

                <div className="counter">
                    <h3>Question {currentQuestion} of 10</h3>
                </div>



            </div>
        )
    }
}

export default Quiz;