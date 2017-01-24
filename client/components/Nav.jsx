var Nav = (props) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <button id="constructed-button" onClick={ () => { props.setCurrentTab('Constructed'); }}>Constructed</button>
      <button id="arena-button" onClick={ () => { props.setCurrentTab('Arena'); }}>Arena</button>
      <button id="build-button" onClick={ () => { props.setCurrentTab('Build'); }}>Add Deck</button>
    </div>
  </nav>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
// <Search searching={props.query}/>
window.Nav = Nav;