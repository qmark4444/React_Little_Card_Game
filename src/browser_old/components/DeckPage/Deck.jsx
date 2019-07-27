import React, { Component } from "react";

import Button from "../common/Button";
import NormalText from "../common/NormalText";

import Card from "../NewCardPage/Card.jsx";

class Deck extends Component {
  static displayName = "Deck";

  constructor(props){
    super(props);
    this.state = {deckWidth: 0, deckHeight: 0};
    this._updatePosition = this._updatePosition.bind(this);
    this.deckRef = React.createRef();
    this.deckFigRef = React.createRef();
  }

  componentDidMount(){
    this._updatePosition();
    window.addEventListener('resize', this._updatePosition);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this._updatePosition);
  }

  _updatePosition(e){
    let deck = this.deckRef.current;
    let deckFig = this.deckFigRef.current;
    this.setState({
      deckWidth: deckFig.offsetWidth,
      deckHeight: deckFig.offsetHeight
    });
  }

  _study = () => {
    this.props.study();
  };

  _review = () => {
    this.props.review();
  };

  _addCards = () => { 
    this.props.add();
  };

  _deleteDeck = () => {
    this.props.delete();
  }

  render() {
    return (
      <div className="deckContainer" id={this.props.id} ref={this.deckRef}>
        <figure 
          onClick={this._study} 
          ref={this.deckFigRef} 
        >
          {
            this.props.deck.cards.map((card, cardIndex) => {
              return (
                <Card 
                      key={card.id}
                      containerWidth={this.state.deckWidth}
                      containerHeight={this.state.deckHeight} 
                      cardIndex={cardIndex}
                      zIndex={cardIndex+1} 
                      id={card.id} 
                      uncover={false}
                >
                </Card>
              )
            })
          }
        </figure>

        <div className="deckGroup">
          <Button className="deckButton" onClick={this._deleteDeck}>
            <NormalText>
              {this.props.deck.name}: Delete
            </NormalText>
          </Button>

          <Button className="editButton" onClick={this._addCards}>
            <NormalText>{this.props.count} Cards: Add</NormalText>
          </Button>
        </div>
        
      </div>
    );
  }
}

export default Deck;