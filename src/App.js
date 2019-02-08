import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

//Component
import Navbar from './Components/Component/Navbar';
import Home from './Components/Container/Home';
import ShortUrl from './Components/Container/ShortUrl';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/shorturl" component={ShortUrl} />     
        </div>
      </Router>
    );
  }
}

export default App;


