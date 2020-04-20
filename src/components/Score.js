import React, { Component } from 'react';
import { QuizContext } from '../contexts/QuizContext';

class Score extends Component {
    static contextType = QuizContext;

    render() {
        const { handleReset, score } = this.context;


        return (
            <div >
                <h1>You scored {score} out of 10</h1> 

                <button onClick={handleReset}>Home</button>


            </div>
        )
    }
}

export default Score;