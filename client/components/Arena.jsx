var Arena = (props) => (
  <div class="arena-list">
    <div onClick={() => { console.log($(this), 'clicked!'); } }>
      Arena Deck 1
    </div>
    <div onClick={() => { console.log('clicked!'); } }>
      Arena Deck 2
    </div>
  </div>
);

window.Arena = Arena;