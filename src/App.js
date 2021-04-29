import React from 'react';
import './App.css';
import './bootstrap/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './Home';
import { Archive } from './Archive';
import { Users } from './Users';
import { Calculator } from './Calculator';
import { Setting } from './Setting';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
    <React.Fragment>
      <Router>
        <Sidebar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/archive" component={Archive} />
          <Route path="/users" component={Users} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/setting" component={Setting} />
        </Switch>
      </Router>
    </React.Fragment>
    </div>
  );
}

export default App;