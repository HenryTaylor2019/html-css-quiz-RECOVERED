import React, { Component } from 'react';
import { QuizContext } from '../contexts/QuizContext';

class Quiz extends Component {
    static contextType = QuizContext;

    render() {
        const { quizData, handleCorrect, handleIncorrect, questionNumber, handleReset, score } = this.context;

        let object = quizData[questionNumber];

        let question = object.question;
        let correct = object.correct;
        let wrongOne =  object.wrongOne;
        let wrongTwo = object.wrongTwo;

        return (
            <div >
                <button onClick={handleReset}>Home</button>

                <h3>{score} out of 10</h3>

                <h2>{question}</h2>

                {/* Conditional to swap answers around */}
                {questionNumber % 2 === 0 ?
                <div className="section"> 
                    <h3 onClick={handleIncorrect}>{wrongOne}</h3>
                    <h3 onClick={handleCorrect}>{correct}</h3>
                    <h3 onClick={handleIncorrect}>{wrongTwo}</h3>
                </div>
                :
                <div className="section"> 
                    <h3 onClick={handleCorrect}>{correct}</h3>
                    <h3 onClick={handleIncorrect}>{wrongOne}</h3>
                    <h3 onClick={handleIncorrect}>{wrongTwo}</h3>
                </div>
                }

            </div>
        )
    }
}

export default Quiz;