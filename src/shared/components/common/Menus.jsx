import React, {Component} from 'react';

class Menus extends Component {
    render(){
        let {
            name,
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
                        <div key={name} className={iconContainerClass}>
                            <NavLink activeStyle={{fontWeight: 'bold'}} to={location}>
                                {name}
                            </NavLink>
                            <i className={iconClass}></i>

                            (Array.isArray(list) && list.length > 0) &&
                            <Menus 
                                key={name} 
                                containerClass={`menu-${name}-dropdown`}
                                iconContainerClass={`menu-${name}-dropdown-icon-container`} 
                                iconClass={`${this.props.iconClass} menu-${name}-dropdown-icon`}
                                list={list}
                                // listClass={`menu-${name}-dropdown-content`}
                            />
                        </div>
                    ))
                }
            </div>
        )
    }
}

module.exports = Menus;