// import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: null,
      cardImages: ['http://media.services.zam.com/v1/media/byName/hs/cards/enus/CS2_072.png', 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/CS2_041.png', 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_169.png'],
      currentTab: 'Arena'
    };
  }

  setCurrentTab(tab) {
    this.setState({
      currentTab: tab
    });
  }

  setCardImages(e) {
    this.getCardImages(e.target.value, ((images) => {
      this.setState({
        cardImages: images
      });
    }).bind(this));
    this.setState({
      cardName: e.target.value
    });
    console.log('Searching for ', this.state.cardName);
  }

  getCardImages(cardName, callback) {
    $.get('http://localhost:3000/cards', (images) => {
      callback(images);
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
          <Build setCardImages={this.setCardImages.bind(this)} cardImages={this.state.cardImages} />
        </div>
      );
    }
  }
}

window.App = App;