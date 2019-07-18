import React, { Component } from "react";

class AddTodo extends Component {
  onAdd = () => {
    this.props.addNew(this.props.text);
    this.props.setText("");
  };
  onTextChange = event => {
    this.props.setText(event.target.value);
  };
  render() {
    const { text } = this.props;
    return (
      <>
        <label>
          Item:
          <input type="text" value={text} onChange={this.onTextChange} />
        </label>
        <button onClick={this.onAdd}>Add</button>
      </>
    );
  }
}

export default AddTodo;
