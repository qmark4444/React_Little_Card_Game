import React, { Component } from "react";
import HeadingText from "../common/HeadingText";
import Logo from "./Logo";
import { headerStyle } from "./../../../css/styles";

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      navbarClass: "navbar",
    }
    this.prevScrollY = 0;
  }

  componentDidMount(){
    window.addEventListener('scroll', this._handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this._handleScroll);
  }

  _handleScroll = evt => {
    let currentScrollY = window.pageYOffset;
    if(currentScrollY > this.prevScrollY){ //compare current scroll position with previous (differ by 1)
      this.setState({navbarClass: "hide"});
    }
    else{
      this.setState({navbarClass: "navbar"});
    }
    this.prevScrollY = currentScrollY;
  }
  
  render(){
    return (
      <div className={this.state.navbarClass}>
        {this.props.children}
      </div>
    )
  }
}

class Header extends Component {
  static displayName = "Header";

  render() {
    return (
      <div className="header">
        <Navbar>
          <Logo />
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
          </ul> 
        </Navbar>
        <HeadingText style={headerStyle}>Card Game</HeadingText>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Header;