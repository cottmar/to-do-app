import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard/index';
import '../../styles/main.scss';
import Landing from '../landing/index';
import noteForm from '../noteForm';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <header>
              <h1>To Do List</h1>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/noteForm">Note Form</Link></li>
                </ul>
              </nav>
            </header>
            <Route 
              exact
              path="/"
              component={Landing}
            />
            <Route
              exact
              path="/dashboard"
              component={Dashboard}
            />
            <Route
            exact
            path="/noteForm"
            component={noteForm}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
