// import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>HS Deck Master</h1>
        <Nav></Nav>
        <div className="col-md-7">
        </div>
        <div className="col-md-5">
        </div>
      </div>
    );
  }
}

window.app = app;