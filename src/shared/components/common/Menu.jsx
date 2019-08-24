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
        const style = this.props.selected && level > 0?
            {background: 'red'}
            : 
            {};
        // const to = this.props.to?this.props.to:'#';
        // const to = this.props.to;

        return (
            <div 
                className={iconContainerClass} 
                style={style}
                // onClick={() => this.props.onClick} // wrong
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