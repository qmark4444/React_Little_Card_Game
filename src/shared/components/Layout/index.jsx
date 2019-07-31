import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Logo from "./Logo";
// import "../../../../public/css/styles";
// import "../../../../public/css/cardgame.scss"; // error: window in style-loader is not defined

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      extraNavbarClass: "",
    }
  }
  
  render(){
    return (
      <div className={[this.props.className,this.state.extraNavbarClass].join(' ')} 
        id={this.props.id}
      >
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

  constructor(props){
    super(props);
    this.state = {
      menuClass: ''
    };
    // this.menuRef = React.createRef();
  }

  componentDidMount(){
    window.addEventListener('click', this._handleHamburgClick, true);
  }

  componentWillUnmount(){
    window.removeEventListener('click', this._handleHamburgClick);
  }

  _handleHamburgClick = e => {
    // if(e.target.id !== 'hamburgBarIcon'){
    //   this.setState({menuClass: ''});
    // }
    // else{
    //   let currentMenuClass = this.state.menuClass;
    //   currentMenuClass.indexOf('responsive') < 0?
    //   this.setState({menuClass: [currentMenuClass,'responsive'].join(' ')})
    //   :
    //   this.setState({menuClass: ''});
    // }

    let currentMenuClass = this.state.menuClass;
    (e.target.id === 'hamburgBarIcon' && currentMenuClass.indexOf('responsive') < 0) ?
      this.setState({menuClass: [currentMenuClass,'responsive'].join(' ')})
      :
      this.setState({menuClass: ''});
  }

  // _handleHamburgBarClick = (e) => {
  //   e.preventDefault();
  //   let currentMenuClass = this.state.menuClass;
  //   currentMenuClass.indexOf('responsive') < 0?
  //   this.setState({menuClass: [currentMenuClass,'responsive'].join(' ')})
  //   :
  //   this.setState({menuClass: ''});

  //   // this.menuRef.current.classList.toggle('responsive');
  // }

  render() {
    const navs = [
      {
        name: 'Home',
        location: '#'
      }, 
      {
        name: 'About',
        location: '#',
      }, 
      {
        name: 'Games',
        location: '#',
      },
      {
        name: 'Portfolio',
        location: '#',
      },
      {
        name: 'Contact',
        location: '#',
      }
    ];

    return (
      <div className="layout">
        <Navbar id="topNavbar" className="topNavbar">
          <Logo />
          <div id="barContainer">
            {/* <div id="hamburgBar" onClick={this._handleHamburgBarClick}> */}
            <div id="hamburgBar">
                  <i className="fa fa-4x fa-bars" id="hamburgBarIcon"></i>
            </div>
            {/* <ul id="navMenu" ref={this.menuRef}> */}
            <ul id="navMenu" className={this.state.menuClass}>
              {navs.map( ({ name, location }) => (
                <li key={name}>
                  <NavLink activeStyle={{fontWeight: 'bold'}} to={location}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div> 
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