import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };//a controlled component
  }

  //add this to update input field (e.g clear it after submit)
  componentWillReceiveProps(nextProps){ 
    if(nextProps.value != undefined){
      this.setState({text: nextProps.value});
    }
  }

  _onSubmit = ev => {
    let keyCode = ev.keyCode || ev.which;
    if(keyCode == 13){
      if(this.props.onEntry && typeof this.props.onEntry === 'function'){
        this.props.onEntry(this.state.text);

        if (this.props.clearOnSubmit) {
          this.setState({ text: "" });
        }
      }
    }
  };

  _onChange = ev => {
    this.setState({ text: ev.target.value });

    if (this.props.onChange) {
      this.props.onChange(ev.target.value);
    }
  };

  render() {
    let {
      placeholder='', 
      type='', 
      name='', 
      className='', 
      style={}, 
      onClick=null,
      readOnly=false, 
    } = this.props;

    let localStyle ={
      container: {
        display:'flex', 
        flexDirection:'row'
      },
      input: {
        flex:'1',
      }
    };

    let concatStyle = Object.assign({}, style, localStyle.input);

    return (
      <div style={localStyle.container}>
        <input
          placeholder={placeholder}
          type={type}
          name={name}
          className={className}
          style={concatStyle}
          ref="inputRef" //use ref if not capture state change
          onChange={this._onChange}
          onKeyUp={this._onSubmit}
          onClick={onClick}
          readOnly={readOnly}
          value={readOnly? this.props.value : this.state.text} //if passed a value then it should be read-only
        />
      </div>
    );
  }
}

// Default props for custom attributes
Input.defaultProps = { clearOnSubmit: true };

export default Input;