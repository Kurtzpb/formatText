import React, { Component } from "react";
import "./App.css";
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from "./text.service";

class App extends Component {
  state = {
    text: []
  };

  formatText = format => () => {
    const selectedText = this.getSelectedText();
    const dataKey = this.getDataKey();
    const { text } = this.state;

    const formattedText = text.map(el => {
      if (el.text === selectedText && el.id === dataKey) {
        return {
          ...el,
          [format]: !el[format]
        };
      }
      return el;
    });

    this.setState({ text: formattedText });
  };

  getSelectedText = () => {
    const selectedText = document.getSelection();

    return selectedText
      .getRangeAt(0)
      .toString()
      .trim();
  };

  getDataKey = () => {
    const selectedText = document.getSelection();

    return Number(selectedText.anchorNode.parentNode.getAttribute("data-key"));
  };

  async componentDidMount() {
    const text = await getMockText();

    const redusedText = text.split(" ").map((el, id) => {
      return {
        id,
        text: el,
        bold: false,
        italic: false,
        underline: false
      };
    });

    this.setState({ text: redusedText });
  }

  render() {
    const { text } = this.state;
    return (
      <div className="App">
        <header>
          <span>Simple Text Editor</span>
        </header>
        <main>
          <ControlPanel
            makeBold={this.formatText("bold")}
            makeItalic={this.formatText("italic")}
            makeUnderline={this.formatText("underline")}
          />
          <FileZone text={text} />
        </main>
      </div>
    );
  }
}

export default App;
