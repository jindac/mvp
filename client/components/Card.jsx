var Card = (props) => (
  <img className={`${props.name}`} src={props.card} onClick={props.addCard} />
);

window.Card = Card;