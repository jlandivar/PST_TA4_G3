import './App.css';
import Navigation from './components/Navigation'
import Show from './components/ShowElectrodomestico'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={Show} />
      <Route path="/top10" render={() => (<div>Mostrando top 10</div>)} />
    </Router>
  );
}

export const backend = {
  host: "http://localhost",
  port: 8080
  }

export default App;
