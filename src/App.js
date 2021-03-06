import React, { Component } from 'react';
import './App.css';


import QuizContextProvidor from './contexts/QuizContext';

import Header from "./components/Header";
import Footer from "./components/Footer";

import ComponentManager from "./ComponentManager";


class App extends Component {


  render() {


    return (
      <div className="App">
        <Header />
        <QuizContextProvidor>
          <ComponentManager />
          <Footer />
        </QuizContextProvidor>

      </div>
    );
  }
}

export default App;
