// import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardImage: null,
      currentTab: 'Arena'
    };
  }

  getCardImage(carName, callback) {
    $.get('https://www.googleapis.com/youtube/v3/search', {
      cardName: cardName
    })
    .done(({image}) => {
      if (callback) {
        callback(image);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
  }

  setCurrentTab(tab) {
    this.setState({
      currentTab: tab
    });
  }

  render() {
    if (this.state.currentTab === 'Constructed') {
      return (
        <div>
          <h1>HS Deck Master</h1>
          <Nav setCurrentTab={this.setCurrentTab.bind(this)} />
          <Constructed />
        </div>
      );
    } else if (this.state.currentTab === 'Arena') {
      return (
        <div>
          <h1>HS Deck Master</h1>
          <Nav setCurrentTab={this.setCurrentTab.bind(this)}></Nav>
          <Arena />
        </div>
      );
    } else if (this.state.currentTab === 'Build') {
      return (
        <div>
          <h1>HS Deck Master</h1>
          <Nav setCurrentTab={this.setCurrentTab.bind(this)}></Nav>
          <Build />
        </div>
      );
    }
  }
}

window.App = App;