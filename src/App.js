import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post"; 


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/post/:post_id" component={Post} />
            <Route path="/about" component={About} /> 
            <Route path="/contact" component={Contact} /> 
            <Route exact path="/" component={Home} /> 
          </Switch>
        </div>
      </React.Fragment>
     );
  }
}
 
export default App;