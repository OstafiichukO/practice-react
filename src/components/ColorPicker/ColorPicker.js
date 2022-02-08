import React from "react";
import "./ColorPicker.css";

class ColorPicker extends React.Component {
  state = {
    activeOptionIdx: 0,
  };
  setActiveIndex = (index) => {
    this.setState({ activeOptionIdx: index });
  };
  makeOptionClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push("ColorPicker__oprion--active");
    }
    return optionClasses.join(" ");
  };

  render() {
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{
                backgroundColor: color,
                // border:
                //   index === this.state.activeOptionIdx
                //     ? "5px solid black"
                //     : "none",
              }}
              omClick={() => this.setActiveIndex(index)}
            ></button>;
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
