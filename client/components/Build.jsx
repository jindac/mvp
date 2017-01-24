class Build extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="Build">
        <input class='cardSearch' onChange={this.props.setCardImages}></input>
        <div>
          {this.props.cardImages.map((card) => (
            <Card card={card} />
          ))}
        </div>
      </div>
    );
  }
}

window.Build = Build;