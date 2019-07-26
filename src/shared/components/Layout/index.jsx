import React, { Component } from "react";
import Logo from "./Logo";

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

class Footer extends Component {
  _displayCopyRight = () => {
    return (
      <span style={{display: 'inline-block', paddingRight: '5px'}}>
        {"2019 - "+new Date().getFullYear()}
      </span>
    )
  }

  render(){
    return (
      <footer style={{display:'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
        <div style={{color: 'white', fontSize: '20px'}}>
          &copy; {this._displayCopyRight()}
          <a href="javascript:void();" target="_blank" style={{textDecoration:'none', color: 'white'}} className="top_tooltip">
              Q.M. Long
          </a>
        </div>

        <h1>
          Footer Grid
        </h1>
      </footer>
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
            {/* TODO: <a> should be replaced by <Link> later
            all ul, li should be replaced by React components later */}
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
          </ul> 
        </Navbar>

        <section>
          {this.props.children}  
        </section>

        <Footer></Footer>
      </div>
    );
  }
}

module.exports = Layout;