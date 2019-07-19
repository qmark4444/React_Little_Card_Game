import React, { Component } from "react";
import HeadingText from "../common/HeadingText";
import Logo from "./Logo";
//import { headerStyle } from "./../../../css/styles";

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      navbarClass: "navbar",
    }
    this.prevScrollY = 0;
  }

  componentDidMount(){
    //scroll event on window
    window.addEventListener('scroll', this._handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this._handleScroll);
  }

  _handleScroll = evt => {
    //console.log('window.scrollTop ', window.pageYOffset);
    let currentScrollY = window.pageYOffset;//get scroll top position
    //compare current scroll position with previous (differ by 1)
    if(currentScrollY > this.prevScrollY){ 
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

class Layout extends Component {
  static displayName = "Layout";

  render() {
    return (
      <div className="layout">
        <Navbar>
          <Logo />
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
          </ul> 
        </Navbar>

        <section>
          {this.props.children}          
        </section>

        <footer>
          <h1>
            Footer Grid
          </h1>
        </footer>
      </div>
    );
  }
}

module.exports = Layout;