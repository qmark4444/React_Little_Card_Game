import React, { Component } from "react";

class Snackbar extends Component {
  componentWillUnmount(){
    console.log('snackbar will unmount')
  }

  _handleClick = () => { 
    this.props.handleClick();
  };

  render() {
    const _style = {
      display: this.props.display?'block':'none',
    };

    return (
      <div id="snackbar" style={_style} onClick={this._handleClick} >
        {this.props.children}
      </div>
    );
  }
}

Snackbar.defaultProps = { dwellTime: 1000 };

export default Snackbar;