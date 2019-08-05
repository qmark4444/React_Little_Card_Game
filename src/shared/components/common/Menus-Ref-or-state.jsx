import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Menus extends Component {
    constructor(props){
        super(props);
        this.state = {
            linkClass: {fontWeight: 'bold'},
            showContent: null,
        };
        this.menuRef = React.createRef();
    }

    _handleLinkClick = (e) => {
        console.log('Menu Link clicked: ', e.target);
        // this.props.onLinkClick(e.target);

        //e.target.classList.toggle('showContent');//imperative? should declarative: use 

        // this.state.showContent?
        //     this.setState({showContent: null})
        //     :
        //     this.setState({showContent:'showContent'})

        console.log('menu ref current ', this.menuRef.current)
    };

    render(){
        let {
            // name,
            containerClass, 
            iconContainerClass, 
            iconClass
        } = this.props;
        let list = Array.isArray(this.props.list)? this.props.list : [this.props.list];
        return (
            <div className={containerClass}>
                {/* <div className={iconContainerClass}>
                    {name&&name}
                    <i className={iconClass}></i>
                </div> */}
                {/* {this.props.children} */}
                {
                    list.map( ({ name, location, list }) => (
                        // <div key={name} className={[iconContainerClass, this.state.showContent].join(' ')} onClick={this._handleLinkClick}>
                        // <div key={name} className={iconContainerClass} onClick={() => this._handleLinkClick(name)}>
                        // <div key={name} className={iconContainerClass} ref={this.menuRef} onClick={this._handleLinkClick}>
                        // <div key={name} className={iconContainerClass} ref={this.menuRef} >
                        <div key={name} className={iconContainerClass} >
                            {
                                name &&
                                // <NavLink className={this.state.linkClass} to={location?location:'#'} onClick={this._handleLinkClick}>
                                // <NavLink activeStyle={this.state.linkClass} to={location?location:'#'}>
                                <NavLink activeStyle={this.state.linkClass} to={location?location:'#'} onClick={this._handleLinkClick} >
                                    {name}
                                </NavLink>
                            }
                            {
                                iconClass &&
                                <i className={`${iconClass} menu-${name}-dropdown-icon`}></i>     
                            }
                        {/* </div>
                        <div key={name} className='menu--dropdown-content'> */}
                            {
                                (Array.isArray(list) && list.length > 0) &&
                                <Menus 
                                    key={name} 
                                    // containerClass={`menu-${name}-dropdown`}
                                    containerClass={`menu-${name}-dropdown-content`}
                                    // iconContainerClass={`menu-${name}-dropdown-icon-container`} 
                                    iconContainerClass=''
                                    // iconClass={iconClass}
                                    list={list}
                                    // listClass={`menu-${name}-dropdown-content`}
                                />
                            }
                        </div>
                    ))
                }
            </div>
        )
    }
}

module.exports = Menus;