import React, { Component } from 'react';
import { QuizContext } from '../contexts/QuizContext';

class Footer extends Component {
    static contextType = QuizContext;


    render() {
        const { handleReset } = this.context;


        return (
            <div className="footer">
                <div className="reset">
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Footer;