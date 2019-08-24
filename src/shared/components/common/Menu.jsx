import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component{
    render(){
        const {
            name, 
            to,
            isExternal,
            level,
            iconClass, 
            iconContainerClass
        } = this.props;
        const style = this.props.selected && level > 0? //hamburg-bar is level 0 menu, no need to set background color
            {background: 'red'}
            : 
            {};

        return (
            <div 
                className={iconContainerClass} 
                style={style}
                onClick={() => this.props.onClick()}
            >
                {
                    name && (to && /^\//.test(to) && !isExternal?
                    <NavLink activeStyle={{fontWeight: 'bold'}} to={to} id={`menu-${name}`}>
                        {name}
                    </NavLink>
                    :
                    isExternal?
                    <a style={{fontWeight: 'bold'}} href={to} target="_blank" id={`menu-${name}`}>
                       {name} 
                    </a>
                    :
                    // <a style={{fontWeight: 'bold'}} href={to || ''}>
                    // add id for click target identification --- React way is a separate component?
                    <a style={{fontWeight: 'bold'}} href={to} id={`menu-${name}`}>
                       {name} 
                    </a>)
                }
                {
                    iconClass &&
                    <i className={`${iconClass} menu-dropdown-icon`}></i>     
                    // <i className={`${iconClass} ${name===''? 'topNav': `menu-${name}`}-dropdown-icon`}></i>     
                }
            </div>
        )
    }
}

module.exports = Menu;