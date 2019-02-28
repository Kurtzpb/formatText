import React, { Component } from "react";
import "./ControlPanel.css";

class ControlPanel extends Component {
  render() {
    const { makeBold, makeItalic, makeUnderline } = this.props;

    return (
      <div id="control-panel">
        <div id="format-actions">
          <button className="format-action" type="button" onClick={makeBold}>
            <b>B</b>
          </button>
          <button className="format-action" type="button" onClick={makeItalic}>
            <i>I</i>
          </button>
          <button
            className="format-action"
            type="button"
            onClick={makeUnderline}
          >
            <u>U</u>
          </button>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
