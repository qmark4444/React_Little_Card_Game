import React, { Component } from "react";
import Logo from "./Logo";

import Menus from '../common/Menus';
import {TopNavMenu} from '../../data_models/TopNavMenu';

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
        // id={this.props.id}
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

        <h1 id="about">
          React Little Games
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
      menuClass: '',
      // selectedMenus: {Home:{}},//debug
      selectedMenus: {},
    };
  }

  componentDidMount(){
    // window.addEventListener('click', this._handleHamburgClick, true);
    // document.getElementById('content').addEventListener('click', this._handleMenuClick, false);
    document.addEventListener('click', this._handleClick, true);

    // window.addEventListener('click', this._handleMenuClick, true);
    // document.querySelectorAll('[class^="menu-level"]').forEach(ele => {
    //   ele.addEventListener('click', this._handleMenuClick, true);
    // })
  }

  componentWillUnmount(){
    // window.removeEventListener('click', this._handleHamburgClick);
    // window.removeEventListener('click', this._handleMenuClick);
    // document.getElementById('content').removeEventListener('click', this._handleMenuClick);
    document.removeEventListener('click', this._handleClick.bind(document));

    // document.querySelectorAll('[class^="menu-level"]').forEach(ele => {
    //   ele.removeEventListener('click', this._handleMenuClick);
    // })
  }

  _handleHamburgClick = e => {
    // console.log('click hamburgbar called');

    let currentMenuClass = this.state.menuClass;
    console.log(e.target);
    (e.target.className.indexOf('menu-dropdown-icon') >= 0  && currentMenuClass.indexOf('responsive') < 0) ?
      this.setState({menuClass: [currentMenuClass,'responsive'].join(' ')})
      :
      this.setState({menuClass: ''});

    // e.target.parentNode.classList.toggle('responsive');//toggle not good: stay unless click again
  }

  _handleMenuClick = e => {
    let currentMenuClass = this.state.menuClass;
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.className);
    // console.log(e.target)
    // if(e.currentTarget.className.indexOf('menu-level') >= 0  && currentMenuClass.indexOf('responsive') < 0){
    //   // e.stopPropagation();
    //   // this.setState({menuClass: [currentMenuClass,'responsive'].join(' ')});
    // }
    // else if(e.currentTarget.className.indexOf('menu-level') < 0  && currentMenuClass.indexOf('responsive') >= 0){
    //   e.stopPropagation();
    //   this.setState({menuClass: ''});
    // } 
    // else if(e.currentTarget.id.indexOf('content') >= 0  && currentMenuClass.indexOf('responsive') >= 0){
    //   // e.stopPropagation();
    //   this.setState({menuClass: ''});
    // } 
    // else if(e.target.className.indexOf('menu-level') < 0){ //not work: menu clicked are <a> not <class="menu-level-">
    //   e.stopPropagation();
    //   this.setState({menuClass: ''});
    // } 
    // else if(e.target.id.indexOf('menu-') < 0){ 
    //   e.stopPropagation();
    //   this.setState({menuClass: ''});
    // } 
    // else 
    if(e.target.className.indexOf('menu-dropdown-icon') >= 0  && currentMenuClass.indexOf('responsive') < 0){
      e.stopPropagation();
      this.setState({menuClass: [currentMenuClass,'responsive'].join(' ')});
    }
    else if(e.target.className.indexOf('menu-dropdown-icon') >= 0  && currentMenuClass.indexOf('responsive') >= 0){
      e.stopPropagation();
      this.setState({menuClass: ''});
    } 
    // else if(e.target.className.indexOf('container-fluid') >= 0){
    //   e.stopPropagation();
    //   this.setState({menuClass: ''});
    // }
  }

  _handleClick = e => {
    let currentMenuClass = this.state.menuClass;
    console.log(e.currentTarget);
    console.log(e.target);

    // if(e.target.tagName.indexOf('a') < 0){
    //   // e.stopPropagation();
    //   this.setState({menuClass: ''});
    // }

    if(e.target.id.indexOf('menu-') < 0){
      //click elsewhere to close dropdown menu:
      //do like jQuery, not React way to modify DOM elements
      // document.getElementsByClassName('show-content') //doesn't support forEach

      // document.querySelectorAll("[class='show-content']").forEach(
      document.querySelectorAll(".show-content").forEach(
        ele => {
          console.log(ele);
          ele.classList.remove('show-content');
        }
      );

      if(currentMenuClass.indexOf('responsive') >= 0){
        e.stopPropagation();
        this.setState({menuClass: ''});
      }
    } 

    //should use a separate hamburgbar component to achieve this????
    if(e.target.className.indexOf('menu-dropdown-icon') >= 0  && currentMenuClass.indexOf('responsive') < 0){
      e.stopPropagation();
      this.setState({menuClass: [currentMenuClass,'responsive'].join(' ')});
    }
    else if(e.target.className.indexOf('menu-dropdown-icon') >= 0  && currentMenuClass.indexOf('responsive') >= 0){
      e.stopPropagation();
      this.setState({menuClass: ''});
    } 

  }


  _updateSelectedMenus = (selectedMenus) => {
    // console.log('top level update selected menus called');
    this.setState({selectedMenus});
  }

  render() {
    const navs = TopNavMenu;

    return (
      <div className="layout">
        <Navbar className="topNavbar">
          <Logo />
          <Menus
            containerClass="menus-container"
            // iconContainerClass={"hamburg-bar" + this.state.menuClass}
            iconContainerClass="hamburg-bar"
            iconClass='fa fa-4x fa-bars'
            responsiveClass={this.state.menuClass}
            menus={{
              name: '', 
              location: null,
              level: 0,
              subMenus: navs
            }}
            selectedMenus={this.state.selectedMenus}
            onClick={(selectedMenus) => this._updateSelectedMenus(selectedMenus)}
          />
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