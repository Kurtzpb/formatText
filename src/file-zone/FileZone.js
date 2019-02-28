import React, { Component } from "react";
import "./FileZone.css";

class FileZone extends Component {
  render() {
    const { text } = this.props;
    return (
      <div id="file-zone">
        <div id="file">
          {text.map(text => (
            <span
              style={{
                fontWeight: text.bold ? "bold" : "",
                fontStyle: text.italic ? "italic" : "",
                textDecoration: text.underline ? "underline" : ""
              }}
              key={text.id}
            >{`${text.text} `}</span>
          ))}
        </div>
      </div>
    );
  }
}

export default FileZone;
