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
      this.setState({extraNavbarClass: "hide"});
    }
    else{
      this.setState({extraNavbarClass: ""});
    }

    this.prevScrollY = currentScrollY;
  }
  
  render(){
    return (
      // <div className={this.props.className+' ' +this.state.extraNavbarClass} id={this.props.id}>
      <div className={[this.props.className,this.state.extraNavbarClass].join(' ')} id={this.props.id}>
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
    // this.navbarRef = React.createRef();
    // this.hamburgBarRef = React.createRef();
    // this.state = {
    //   navbarClassName: 'navbar',
    //   menuClass: ''
    // };
    this.menuRef = React.createRef();
  }

  componentDidMount(){
    // this.hamburgBarRef.current.addEventListener('click', this._handleHamburgBarClick, true);
    // window.addEventListener('click', this._handleHamburgBarClick, true);
    // this.navbarRef.current.addEventListener('click', this._handleHamburgBarClick, true);//Navbar not a real DOM element
    //error: this.navbarRef.current.addEventListener is not a function
  }

  componentWillUnmount(){
    // this.hamburgBarRef.current.removeEventListener('click', this._handleHamburgBarClick);
    // window.removeEventListener('click', this._handleHamburgBarClick);
    // this.navbarRef.removeEventListener('click', this._handleHamburgBarClick);
  }

  _handleHamburgBarClick = (e) => {
    e.preventDefault();
    //console.log('handleHamburgBarClick ', e.target);//can be <i> or <a> depends on where mouse clicked
    // e.target.classList.add('responsive');
    // console.log(this.hamburgBarRef.current);
    // console.log(this.hamburgBarRef.current.children[0].classList);
    // let hamburgBar = this.hamburgBarRef.current.children[0]; 
    // if (hamburgBar.className === "hamburgBar") {
    //   hamburgBar.className += " responsive";
    // } else {
    //   hamburgBar.className = "hamburgBar";
    // }

    // console.log(this.navbarRef.current);
    // console.log(this.navbarRef.current.id);//undefined
    // console.log(this.navbarRef.current.className);//undefined
    // console.log(this.navbarRef.current.classList);//undefined
    // console.log(this.navbarRef.current.props.id);
    // console.log(this.navbarRef.current.props.children);//two child: <Logo>, <ul>
    // console.log(this.navbarRef.current.props.children[1].classList);
    // // let navBar = this.navbarRef.current.props.children[1]; 
    // // if (navBar.className === "navbar") {
    // //   console.log('navbar add class')
    // //   // navBar.className += " responsive";
    // //   navBar.classList.add("responsive");
    // // } else {
    // //   navBar.className = "navbar";
    // // }
    // let ul = this.navbarRef.current.props.children[1]; 
    // if (ul.className === "") {
    //   console.log('ul add class')
    //   // navBar.className += " responsive";
    //   ul.classList.add("responsive");
    // } else {
    //   ul.className = "";
    // }

    // use local this.state, not Ref!!!
    // let currentNavbarClass = this.state.navbarClassName;
    // currentNavbarClass.indexOf('responsive') < 0?
    // this.setState({navbarClassName: [currentNavbarClass,'responsive'].join(' ')})
    // :
    // this.setState({navbarClassName: 'navbar'});

    // let currentMenuClass = this.state.menuClass;
    // console.log('menu class')
    // currentMenuClass.indexOf('responsive') < 0?
    // this.setState({menuClass: [currentMenuClass,'responsive'].join(' ')})
    // :
    // this.setState({menuClass: ''});

    console.log(this.menuRef.current);
    this.menuRef.current.classList.toggle('responsive');
  }

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
        {/* <Navbar id="topNavbar" ref={this.navbarRef}> */}
        <Navbar id="topNavbar" className="navbar">
        {/* <Navbar id="topNavbar" className={this.state.navbarClassName}> */}
          <Logo />
          <div id="barContainer">
            {/* <div id="hamburgBar"> */}
            <div id="hamburgBar" onClick={this._handleHamburgBarClick}>
              {/* <li ref={this.hamburgBarRef}> */}
                {/* <NavLink to="javascript:void(0);" className="hamburgBar" onClick={this._handleHamburgBarClick}> */}
                {/* javascript:void(0); use with e.preventDefault */}
                {/* <NavLink to="javascript:void(0);" className="hamburgBar" ref={this.hamburgBarRef}> */}
                {/* error: Function components cannot be given refs.... do you mean React.forwaardRef()???? */}
                {/* <NavLink to="javascript:void(0);" className="hamburgBar"> */}
                {/* <NavLink to="" className="hamburgBar" onClick={this._handleHamburgBarClick}> */}
                <NavLink to="" className="hamburgBar">
                  <i className="fa fa-4x fa-bars" style={{verticalAlign: 'middle'}}></i>
                </NavLink>
            </div>
            {/* <ul id="navMenu" className={this.state.menuClass} > */}
            <ul id="navMenu" ref={this.menuRef}>
              {/* TODO: <a> should be replaced by <Link> later
              all ul, li should be replaced by React components later */}
                {/* <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li> */}

                {/* {navs.map( nav => (
                  <li key={nav.name}>
                    <NavLink activeStyle={{fontWeight: 'bold'}} to={nav.location}>
                      {nav.name}
                    </NavLink>
                  </li>
                ))} */}

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