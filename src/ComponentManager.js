import React, { Component } from 'react';
import './App.css';
import { QuizContext } from '../src/contexts/QuizContext';

import Quiz from "./components/Quiz";
import Score from "./components/Score";


class ComponentManager extends Component {
  static contextType = QuizContext;

  render() {
    const { questionNumber } = this.context;

    return (
      <div>

        {questionNumber < 10 ? <Quiz /> : <Score />}

      </div>
    );
  }
}

export default ComponentManager;
