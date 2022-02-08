import React from "react";
import "./Dropdown.module.css";
class Dropdown extends React.Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button
          onClick={this.toggle}
          type="button"
          className="Dropdown__toggle"
        >
          {this.state.visible ? "hide" : "show"}
        </button>
        {this.state.visible && (
          <div className="Dropdown__menu">Випадающее меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
