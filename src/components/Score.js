import React, { Component } from 'react';
import { QuizContext } from '../contexts/QuizContext';

class Score extends Component {
    static contextType = QuizContext;

    render() {
        const { score } = this.context;


        return (
            <div className="score-page">
                <h2 className="final-score">You scored {score} out of 10</h2> 
            </div>
        )
    }
}

export default Score;