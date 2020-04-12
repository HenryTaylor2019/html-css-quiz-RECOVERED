import React from 'react';
import './App.css';

import QuizContextProvidor from './contexts/QuizContext';


import Header from "./components/Header";
import Footer from "./components/Footer";

import Quiz from "./components/Quiz";


function App() {
  return (
    <div className="App">
      <Header />
      <QuizContextProvidor>
        <Quiz />
      </QuizContextProvidor>
      <Footer />
    </div>
  );
}

export default App;
