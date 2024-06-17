import React from 'react';
import ReactDOM from 'react-dom';
import ParagraphGenerator from './ParagraphGenerator';

function App() {
  return (
    <div>
      <ParagraphGenerator />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


export default App
