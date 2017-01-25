class Build extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: {
        decklist: [],
        count: 0
      }
    };
  }

  addCard(e) {
    var newDeck;
    var card;
    if (this.state.deck.count === 0) {
      newDeck = {
        decklist: [],
        count: 0,
      };
      card = {count: 1, name: e.target.className};
      newDeck.decklist.push(card);
      newDeck.count++;
      this.setState({
        deck: newDeck
      });
    } else if (this.state.deck.count < 30) {
      newDeck = this.state.deck;
      var found = false;
      for (var i = 0; i < newDeck.decklist.length; i++) {
        if (newDeck.decklist[i].name === e.target.className) {
          found = true;
          if (newDeck.decklist[i].count === 1) {
            newDeck.decklist[i].count++;
            newDeck.count++;
            this.setState({
              deck: newDeck
            });
          } else if (newDeck.decklist[i].count === 2) {
            alert('Error: You already have two copies of ' + newDeck.decklist[i].name + ' in the deck');
          }
        }
      }
      if (!found) {
        card = {count: 1, name: e.target.className};
        newDeck.decklist.push(card);
        newDeck.count++;
        this.setState({
          deck: newDeck
        });
      }
    } else if (this.state.deck.count === 30) {
      alert('Error: You already have 30 cards in the deck and cannot add anymore.');
    }
  }

  sendDeck() {
    var deck = this.state.deck;
    var deckName = prompt('What would like to call this deck?');
    deck.deckName = deckName;
    this.props.saveDeck(deck);
  }

  render() {
    return (
      <div class="Build">
        <input className='cardSearch' onChange={this.props.setCardImages}></input>
        <div className="foundCards">
          {this.props.cardImages.map((card) => (
              <Card card={card.image_src} name={card.name} addCard={this.addCard.bind(this)} />
            )
          )}
        </div>
        <div className="decklist">
          <ul>
            {this.state.deck.decklist.map((card) => {
              return (<li>{card.name}<span>{` x ${card.count}`}</span></li>);
            })}
            <li>{`Total Cards: ${this.state.deck.count}`}</li>
            <button onClick={this.sendDeck.bind(this)}>Save Deck!</button>
          </ul>
        </div>
      </div>
    );
  }
}

window.Build = Build;