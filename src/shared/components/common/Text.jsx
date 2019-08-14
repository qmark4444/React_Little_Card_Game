import React, { Component } from "react";
import {scalingFactors} from '../../../browser/css/styles';

class Text extends Component {
    static displayName = "Text-Base-Component"; // displayName for debugging
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

//when using HOC, static property (displayName) needs to add explicitly, otherwise will be lost
function getDisplayName(WrappedComponent){ //copied from HOC React official website
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export const withText = (Text, size) => {
    // return class extends Component {
    class WithText extends Component {
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
            // let width = window? window.screen.width : '';//how to made fontsize adaptive to window width?
            // //still complain window is not defined!!! why?
            // let fontSize = width / scalingFactors.normal;//????

            let concatStyles = Object.assign({}, this.props.style, scalingFactors[size] );

            return (
                // <Text className={this._getClass(size)}/>
                // <Text className={this._getClass(size)} style={this.style[size]}>
                // <Text className={this._getClass(size)} style={scalingFactors[size]}>
                // className is overridden by inherited className
                // <Text style={scalingFactors[size]}>
                <Text style={concatStyles}>
                    {this.props.children}
                </Text>
            );            
        }
    }

    //static property
    WithText.displayName = `withText(${getDisplayName(Text)})`;
    //or use 'hoist-non-react-statics' module
    //import hoistNonReactStatic from 'hoist-non-react-statics';
    //hoistNonReactStatic(WithText, Text);

    return WithText;
};