import React from 'react';

class ParagraphGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraph: ''
    };
    this.generateParagraph = this.generateParagraph.bind(this);
  }

  generateParagraph(wordLength) {
    const words = [];
    for (let i = 0; i < 50; i++) { // Generating 50 words by default
      let word = '';
      for (let j = 0; j < wordLength; j++) {
        word += String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Random lowercase alphabets
      }
      words.push(word);
    }
    const paragraph = words.join(' ');
    this.setState({ paragraph });
  }

  render() {
    const { paragraph } = this.state;
    return (
      <div>
        <h2>Paragraph Generator</h2>
        <label htmlFor="wordLength">Enter Word Length:</label>
        <input
          type="number"
          id="wordLength"
          onChange={(e) => this.generateParagraph(parseInt(e.target.value))}
        />
        <p>Generated Paragraph:</p>
        <p>{paragraph}</p>
      </div>
    );
  }
}

export default ParagraphGenerator;

