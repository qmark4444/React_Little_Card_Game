import React, {Component} from 'react';

class Dropdown extends Component {
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
                <div className={iconContainerClass}>
                    {name&&name}
                    <i className={iconClass}></i>
                </div>
                {this.props.children}
                {/* {
                    list.map( ({ name, location, list }) => (
                        (Array.isArray(list) && list.length > 0)?
                        <Dropdown 
                            key={name} 
                            name={name}
                            containerClass={`menu-${name}-dropdown`}
                            iconContainerClass={`menu-${name}-dropdown-icon-container`} 
                            iconClass={`${this.props.iconClass} menu-${name}-dropdown-icon`}
                            list={list}
                            listClass={`menu-${name}-dropdown-content`}
                        />
                        :
                        <div key={name}>
                            <NavLink activeStyle={{fontWeight: 'bold'}} to={location}>
                                {name}
                            </NavLink>
                        </div>
                    ))
                } */}
            </div>
        )
    }
}

module.exports = Dropdown;