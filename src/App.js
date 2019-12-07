import React from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Team from './components/team';
import Home from './components/home';

const App = () => {
  return (
   <Router>
     <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/team" component={Team} />
     </div>
   </Router>
  );
}

export default App;
