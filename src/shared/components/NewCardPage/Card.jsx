import React, { Component } from "react";
import {cardStyle} from "../../../../public/css/styles.js";

class Card extends Component {
  static displayName = "Card";

  constructor(props){
    super(props);
    this.state = {orientation: 'front', className:''};
  }

  _flipCard = () => {
    let orientation = this.state.orientation === 'front'? 'back':'front';
    let className = 'flip-animation';
    this.setState({orientation, className})
  }

  _animeEnd = () => {
    this.setState({className:''});
  }

  render() {
    let {containerWidth=0, containerHeight=0, cardIndex=0, zIndex=1, uncover=false, orientation='front', card=null} = this.props;
    
    //calculate each card position
    let stackGap = 4*cardIndex;
    let offsetX = (containerWidth-cardStyle.width)/2 - stackGap;
    let offsetY = (containerHeight-cardStyle.height)/2 - stackGap;
    
    let bgColor = uncover?'white':'red';
    let extraStyle = {
      top: offsetY, 
      left: offsetX, 
      zIndex: zIndex, 
      backgroundColor: bgColor
    };
    let concatStyle = Object.assign({}, cardStyle, extraStyle);
    return (
      <div style={concatStyle} onClick={this._flipCard} className={this.state.className} onAnimationEnd={this._animeEnd}>
        {(card && uncover)? card[this.state.orientation]: null}
      </div>
    );
  }
}

export default Card;