import React from 'react';
import ReactDOM from 'react-dom';
import CustomAnchor from './CustomAnchor';

// App component using CustomAnchor
function App() {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <CustomAnchor href="https://example.com">Visit Example.com</CustomAnchor>
    </div>
  );
}

// Render the App component
ReactDOM.render(<App />, document.getElementById('root'));

export default App
