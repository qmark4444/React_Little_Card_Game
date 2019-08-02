import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';

class Menu extends Component{
    render(){
        let list = Array.isArray(this.props.list)? this.props.list : [this.props.list];
        // if(list.length == 0){
        //     return (
        //         <NavLink activeStyle={{fontWeight: 'bold'}} to={location}>
        //             {name}
        //         </NavLink>
        //     )
        // }
        return (
            // <div id={this.props.listID} className={this.props.listClass}>
            // <ul className={this.props.listClass}>
            <div className={this.props.listClass}>
                {list.map( ({ name, location, list }) => (
                    (Array.isArray(list) && list.length > 0)?
                    <Dropdown 
                        key={name} 
                        name={name}
                        containerClass={`menu-${name}-dropdown`}
                        iconContainerClass={`menu-${name}-dropdown-icon-container`} 
                        iconClass={`menu-${name}-dropdown-icon`}
                    >
                        <Menu list={list} listClass={`menu-${name}-dropdown-content`}/>
                    </Dropdown>
                    :
                    // <li key={name}>
                    <div key={name}>
                        <NavLink activeStyle={{fontWeight: 'bold'}} to={location}>
                            {name}
                        </NavLink>
                    </div>
                    // </li>
                ))}
            </div>
            // </ul>
        )
    }
}

module.exports = Menu;