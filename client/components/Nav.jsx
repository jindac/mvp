var Nav = () => (
  <nav className="navbar">
    <button id="constructed-button" onClick={ () => { $('.constructed-list').toggle(); }}>Constructed</button>
    <div className="constructed-list">
      <div onClick={() => { console.log($(this), 'clicked!'); } }>
        Con Deck 1
      </div>
      <div onClick={() => { console.log('clicked!'); } }>
        Con Deck 2
      </div>
    </div>
    <button id="arena-button" onClick={ () => { $('.arena-list').toggle(); }}>Arena</button>
    <div className="arena-list">
      <div onClick={() => { console.log('clicked!'); } }>
        Arena Deck 1
      </div>
      <div onClick={() => { console.log('clicked!'); } }>
        Arena Deck 2
      </div>
    </div>
    <div className="col-md-6 col-md-offset-3"></div>
  </nav>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
// <Search searching={props.query}/>
window.Nav = Nav;