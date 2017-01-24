var Constructed = (props) => (
  <div class="constructed-list">
    <div onClick={() => { console.log($(this), 'clicked!'); } }>
      Con Deck 1
    </div>
    <div onClick={() => { console.log('clicked!'); } }>
      Con Deck 2
    </div>
  </div>
);

window.Constructed = Constructed;