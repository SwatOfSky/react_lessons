import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router, Link, Route, Switch,
} from "react-router-dom";
import Main from './pages/main';
import somePage from './pages/somePage';
import Clock from "./components/header/Clock";
import Header from "./components/header/header";
import Content from "./components/content/content";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <div>
    <Link to="/Content">Content</Link> <br/>
    <Link to="/Header">Header</Link>
              <Switch>
                  <Route path="/Content">
                      <Content />
                  </Route>
                  <Route path="/header">
                  <Header />
                  </Route>
                  <Main />
              </Switch>
          </div>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);