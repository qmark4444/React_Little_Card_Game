import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component{
    render(){
        const {
            name, 
            to,
            isExternal,
            iconClass, 
            iconContainerClass
        } = this.props;
        const style = this.props.selected?
            {background: 'red'}
            : {};
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
                    name && (to && !isExternal?
                    <NavLink activeStyle={{fontWeight: 'bold'}} to={to} >
                        {name}
                    </NavLink>
                    :
                    isExternal?
                    <a style={{fontWeight: 'bold'}} href={to} target="_blank">
                       {name} 
                    </a>
                    :
                    <a style={{fontWeight: 'bold'}}>
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