var Nav = (props) => (
  <div className="col-md-6 col-md-offset-3">
    <button id="constructed-button" onClick={ () => { props.setCurrentTab('Constructed'); }}>Decks</button>
    <button id="build-button" onClick={ () => { props.setCurrentTab('Build'); }}>Add Deck</button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
// <Search searching={props.query}/>
window.Nav = Nav;