class Decks extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleDeck(e) {
    $(e.target).next().toggle();
  }

  render () {
    return (
      <div class="Decks-list">
        {this.props.decks.map((deck) => {
          return (
            <div>
              <button onClick={this.toggleDeck} className="deckline">{deck.deckName}</button>
              <ul>
                {deck.decklist.map((card) => {
                  return (
                    <li>{card.name}<span>{` x ${card.count}`}</span></li>
                  );
                })}
                <li>{`Total Cards: ${deck.count}`}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

window.Decks = Decks;