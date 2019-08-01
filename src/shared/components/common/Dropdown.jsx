import React, {Component} from 'react';
// import Menu from './Menu';

class Dropdown extends Component {
    render(){
        let {
            name,
            containerClass, 
            iconContainerClass, 
            iconClass, 
            // iconID, 
            // menuID,
            // menuList,
            // menuListClass 
        } = this.props;
        return (
            <div className={containerClass}>
                <div className={iconContainerClass}>
                    {name&&name}
                    {/* <i className={iconClass} id={iconID}></i> */}
                    <i className={iconClass}></i>
                </div>
                {/* <Menu
                    listID={menuID}
                    list={menuList}
                    listClass={menuListClass}
                /> */}
                {this.props.children}
            </div>
        )
    }
}

module.exports = Dropdown;