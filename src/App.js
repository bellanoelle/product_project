import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Clothes from './components/Clothes';
import Home from './components/Home';
import Tools from './components/Tools';
import Electronics from './components/Electronics';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {products: []};
    }    


    componentDidMount = () =>{
        this.serverRequest = 
            axios.get(this.props.source)
                .then(res => {
                    this.setState({
                        products: res.data.products
                    })
                });
    }

    componentWillUnmount = () => {
        this.serverRequest.abort();
    }

    render() {

        // Styling
        var jobStyle = {
            padding: "1em",
            margin: "1em 0 2em 0",
            backgroundColor: "silver",
        };
        var jobRubrik = {
            color: "red",
            borderBottom: "3px solid black"
        };

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
                {this.state.products.map(product =>{
                    return (
                        <div key={product.url} style={jobStyle}>
                            <h3 style={jobRubrik}>{product.name}</h3>
                            <p>Price: 
                            <a href={product.url}> 
                            {product.consumerPrice}
                            </a></p>
                        </div>
                    );
/* Notera att texterna läggs direkt mot varandra - utan något mellanrum - när det ser ut som ovan.
Man kan lösa det med <span> </span>, men det är en knölig metod.
Var alltså vaken på detta problem.
*/
                })}
            </div>
        )
    }
};

export default App;
