import React from "react";
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { BrowswerRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Workerlist from './pages/WorkerList'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
