import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from 'react-dom';
import GitHubInfoCard from './GitHubInfoCard';

function App() {
  return (
    <div>
      <GitHubInfoCard username="nalindalal" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App
