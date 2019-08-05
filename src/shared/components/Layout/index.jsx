import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Logo from "./Logo";

import Dropdown from '../common/Dropdown';
import Menu from '../common/Menu';
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
      menuClass: '',
      // selectedMenus: {Home:{}},//debug
      selectedMenus: {},
    };
  }

  componentDidMount(){
    window.addEventListener('click', this._handleHamburgClick, true);
  }

  componentWillUnmount(){
    window.removeEventListener('click', this._handleHamburgClick);
  }

  _handleHamburgClick = e => {
    // console.log('click hamburgbar called');
    let currentMenuClass = this.state.menuClass;
    console.log(e.target);
    (e.target.className.indexOf('menu--dropdown-icon') > 0  && currentMenuClass.indexOf('responsive') < 0) ?
      this.setState({menuClass: [currentMenuClass,'responsive'].join(' ')})
      :
      this.setState({menuClass: ''});

    e.target.parentNode.classList.toggle('responsive');//Menus test
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
          {/* <Dropdown
            containerClass="menu--dropdown"
            iconContainerClass="menu--dropdown-icon-container"
            iconClass="fa fa-4x fa-bars menu--dropdown-icon"
          >
            <Menu
              list={navs}
              listClass={"menu--dropdown-content "+this.state.menuClass}
            />
          </Dropdown> */}

          {/* <Menu
            list={{
              name: '', 
              location: '#',
              list: navs
            }}
            listClass='top-menu'
            iconClass='fa fa-4x fa-bars'
          /> */}

          <Menus
            // containerClass="menu--dropdown"
            // iconContainerClass="menu--dropdown-icon-container"
            containerClass="topNav-dropdown"
            iconContainerClass="topNav-dropdown-icon-container"
            iconClass='fa fa-4x fa-bars'
            menus={{
              name: '', 
              location: '#',
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