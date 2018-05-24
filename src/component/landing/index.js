// Landing
// The landing component should display a brief description of the to do app
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default class Landing extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <header>
              <h2>Enter in what tasks you need to complete.</h2>
            </header>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
