import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as d3 from 'd3';
import './App.css';
import Home from './components/home.jsx';
import Art from './components/art.jsx';
import About from './components/about.jsx';
import WebDev from './components/webdev.jsx';

class App extends Component {
  state = {
    artwork: [{id: "1", medium: "ink and watercolor", title: "Money", url: "https://i.imgur.com/YPGOEq4.jpg"}]
  }

componentDidMount(){
d3.csv("https://accesscontrolalloworiginall.herokuapp.com/https://raw.github.com/samischonefeld/sami_portfolio/master/art_work_Sheet1.csv")
  .then(
    data => {
      this.setState(prevState => ({
        artwork: data
      }))
    }
  )
}
  render() {
    return (
    <Router>
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/art' render ={(props) => <Art {...props} artwork={this.state.artwork} />}  />
        <Route exact path = '/about' component = {About} />
        <Route exact path = '/webdev' component = {WebDev} />
      </Switch>
    </Router>
    );
  }
}

export default App;
