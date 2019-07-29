import React, { Component } from "react";
import {scalingFactors} from '../../../../public/css/styles';

class Text extends Component {
    static displayName = "Text";
    render() {
        return (
            <span className={this.props.className}
                style={this.props.style}
            >
                {this.props.children}
            </span>
        );
    }
}

export default Text;

export const withText = (Text, size) => {
    return class extends Component {
        //should avoid using switch-case or if-else!!!!
        //HOW?????????
        //use object/map: key/value!!!!: obj[size]--- and value can be a function too!!!!
        //or use function as dynamic-param: function(size)
        _getClass = size => {
            switch(size){
                case 'big':
                    return "fontBig";
                case 'normal':
                default:
                    return "fontNormal";
            }
        };

        // _getStyle = size => {....};
        // style = {
        //     'Heading': {fontSize: 45},
        //     'Normal': {fontSize: 40}
        // }

        render(){
            return (
                // <Text className={this._getClass(size)}/>
                // <Text className={this._getClass(size)} style={this.style[size]}>
                // <Text className={this._getClass(size)} style={scalingFactors[size]}>
                // className is overridden by inherited className
                <Text style={scalingFactors[size]}>
                    {this.props.children}
                </Text>
            );            
        }
    }
};