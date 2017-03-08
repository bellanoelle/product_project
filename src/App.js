import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Clothes from './components/Clothes';
import Home from './components/Home';
import Tools from './components/Tools';
import Electronics from './components/Electronics';


const App = () => {
  return (
  <div>
    <Router>

      <div className="style">
      <div className="logo"></div>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Clothes">Clothes</Link></li>
          <li><Link to="/Tools">Tools</Link></li>
          <li><Link to="/Electronics">Electronics</Link></li>
          
        </ul>

        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/Clothes" component={Clothes} />
        <Route path="/Tools" component={Tools} />
        <Route path="/Electronics" component={Electronics} />
       </div>
      </Router>
    </div>
  );
};


export default App;
