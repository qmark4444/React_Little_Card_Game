import React, {Component} from 'react';
import Menu from './Menu';

// class Menus extends Component { // Menu collection component: recursive
//     constructor(props){
//         super(props);
//         // this.state = {
//         // };
//         this.selectedMenus = props.selectedMenus;
//         this.onClick = props.onClick;
//     }
const Menus = ({
    menus,
    selectedMenus, 
    onClick, 
    containerClass, 
    iconContainerClass, 
    iconClass,
    responsiveClass
}) => {
    const _handleMenuClick = (name) => {
        // console.log('called handle menu click')
        //first, toggle selected
        if(selectedMenus[name]){
            delete selectedMenus[name];
        }
        else{
            selectedMenus = {};//first clear all other same-level selected menus
            selectedMenus[name] = {};//an object can nest more objects
        }
        //then, update selectedMenus
        onClick(selectedMenus);
    };

    const _updateSelectedMenus = (selectedSubMenus, menuName) => {
        // console.log('called update selected menus')
        // this.props.selectedMenus[menuName] = selectedSubMenus;
        // this.props.onClick(this.props.selectedMenus);
        selectedMenus[menuName] = selectedSubMenus;//update selected-SUB-Menus
        onClick(selectedMenus);//update selectedMenus
    };

    // render(){
        // const {
        //     // name,
        //     containerClass, 
        //     iconContainerClass, 
        //     iconClass
        // } = this.props;
        let menuList = Array.isArray(menus)? menus : [menus];
        // console.log('menus ', menuList);
        // console.log('selectedMenus ', selectedMenus)
        return (
            <div className={containerClass}>
                {
                    menuList.map( ({ name, location, isExternal, level, subMenus }) => {
                        let containerClass = `menu-level-${level}-content ${responsiveClass}`;
                        if(level > 0 && selectedMenus[name]){  // level 0 is the topNav                      
                            containerClass += ' show-content'; 
                        }

                        return (
                            <div key={name} className={`menu-level-${level}`} >
                                <Menu
                                    name={name}
                                    to={location}
                                    isExternal={isExternal}
                                    level={level}
                                    // selected={this.selectedMenus[name]?this.selectedMenus[name]:undefined}
                                    // selected={selectedMenus[name]?selectedMenus[name]: undefined}
                                    selected={selectedMenus[name]}

                                    // onClick={this._handleMenuClick}
                                    onClick={() => _handleMenuClick(name)}
                                    iconClass={iconClass}
                                    iconContainerClass={iconContainerClass}
                                />
                                {
                                    (Array.isArray(subMenus) && subMenus.length > 0) &&
                                    <Menus 
                                        key={name} 
                                        containerClass={containerClass}
                                        // containerClass={`${name===''? 'topNav': 'menu'}-dropdown-content ${selectedMenus[name]?'show-content':''}`}
                                        // containerClass={`${name===''? 'topNav': `menu-${name}`}-dropdown-content ${selectedMenus[name]?'show-content':''}`}
                                        // iconContainerClass={`menu-${name}-dropdown-icon-container`} 
                                        iconContainerClass=''
                                        // iconClass={iconClass}

                                        responsiveClass={responsiveClass}
                                        
                                        // listClass={`menu-${name}-dropdown-content`}
                                        menus={subMenus}
                                        selectedMenus={selectedMenus[name]?selectedMenus[name]: {}}
                                        // selectedMenus={selectedMenus[name]}

                                        // onClick={this._updateSelectedMenus}
                                        // onClick={(name---WRONG) => this._updateSelectedMenus(selectedMenus, name)}
                                        onClick={(selectedMenus) => _updateSelectedMenus(selectedMenus, name)}
                                    />
                                }
                            </div>
                        )}
                    )
                }
            </div>
        )
    // }
}

module.exports = Menus;