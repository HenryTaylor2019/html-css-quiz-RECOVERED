import React, { createContext, Component } from 'react';

export const QuizContext = createContext();

class QuizContextProvider extends Component {
    state = {
        quizData: 
        [
            {
                question: 'What does CSS stand for?',
                correct: 'Cascading Style sheets',
                wrongOne: 'Computer Style sheets',
                wrongTwo: 'Cascading Syntax sheets'
            },
            {
                question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
                correct: 'In the <head> section',
                wrongOne: 'In the <body> section',
                wrongTwo: 'At the Bottom of the page'
            },
            {
                question: 'Which HTML tag is used to define an internal style sheet?',
                correct: '<style>',
                wrongOne: '<link>',
                wrongTwo: '<css>'
            },
            {
                question: 'What is the correct HTML element for inserting a line break?',
                correct: '<br>',
                wrongOne: '<break>',
                wrongTwo: '<ul>'
            },
            {
                question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
                correct: 'alt',
                wrongOne: 'title',
                wrongTwo: 'href'
            },
            {
                question: 'Which of the following property is used to change the face of a font?',
                correct: 'font-family',
                wrongOne: 'font-style',
                wrongTwo: 'font-type'
            },
            {
                question: 'Which of these refers to an element by class?',
                correct: '.class',
                wrongOne: '#class',
                wrongTwo: '_class'
            },
            {
                question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
                correct: 'alt',
                wrongOne: 'title',
                wrongTwo: 'href'
            },
            {
                question: 'How do you add a comment in a CSS file?',
                correct: '/* this is a comment */',
                wrongOne: '<--! this is a comment -->',
                wrongTwo: '// this is a comment //'
            },
            {
                question: 'Which of these is used to change the text color of an element?',
                correct: 'color:',
                wrongOne: 'font-color:',
                wrongTwo: 'text-color:'
            },
        ],
        score: 0,
        incorrect: null,
        questionNumber: 0,
    }

    handleCorrect = (e) => {
        let correct = this.state.score + 1;
        let nextQuestion = this.state.questionNumber + 1;
        
        this.setState({
            score: correct,
            questionNumber: nextQuestion,
        });
    }

    handleIncorrect = (e) => {

        let incorrect = this.state.incorrect + 1;
        let nextQuestion = this.state.questionNumber + 1;

        this.setState({
            incorrect: incorrect,
            questionNumber: this.state.questionNumber < 9 ? nextQuestion : 0,
            score: this.state.questionNumber < 9 ? nextQuestion : 0,
            incorrect: this.state.questionNumber < 9 ? nextQuestion : 0,
        });
        e.preventDefault();
    }

    handleReset = (e) => {
    
        this.setState({
            score: null,
            incorrect: null,
            questionNumber: 0,
        });
        e.preventDefault();
    }

    render() {

        return (
            <QuizContext.Provider value={{
                ...this.state,
                handleCorrect: this.handleCorrect,
                handleIncorrect: this.handleIncorrect,
                handleReset: this.handleReset,
            }}>

                {this.props.children}
            </QuizContext.Provider>
        );
    }
}

export default QuizContextProvider;