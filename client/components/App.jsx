// import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: null,
      cardImages: [],
      currentTab: 'Build',
      decks: []
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
    // this.setState({
    //   cardName: e.target.value
    // });
    // console.log('Searching for ', this.state.cardName);
  }

  getCardImages(cardName, callback) {
    var request = () => {
      $.get('http://localhost:3000/cards', {cardName: cardName}).done((images) => {
        callback(images);
      });
    };

    var debRequest = _.debounce(request, 200);
    if (cardName !== '' && cardName !== undefined && cardName.length > 3) {
      debRequest();
    }
  }

  saveDeck(deck) {
    var decks = this.state.decks;
    decks.push(deck);
    this.setState({
      decks: decks
    });
  }

  render() {
    if (this.state.currentTab === 'Decks') {
      return (
        <div>
          <h1>HS Deck Master</h1>
          <Nav setCurrentTab={this.setCurrentTab.bind(this)} />
          <Decks decks={this.state.decks} />
        </div>
      );
    } else if (this.state.currentTab === 'Build') {
      return (
        <div>
          <h1>HS Deck Master</h1>
          <Nav setCurrentTab={this.setCurrentTab.bind(this)}></Nav>
          <Build setCardImages={this.setCardImages.bind(this)} cardImages={this.state.cardImages} decks={this.state.decks} saveDeck={this.saveDeck.bind(this)} />
        </div>
      );
    }
  }
}

window.App = App;