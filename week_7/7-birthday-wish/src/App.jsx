import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [wishes, setWishes] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can customize these messages or add more
    const messages = [
      `Happy Birthday, ${name}! May your day be filled with joy and laughter.`,
      `Wishing you a fantastic birthday, ${name}! May all your dreams come true.`,
      `On your special day, ${name}, I wish you happiness, health, and all the best! Happy Birthday!`
    ];
    setWishes(messages);
  };

  return (
    <div className="App">
      <h1>Birthday Wisher</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Generate Birthday Wishes</button>
      </form>
      <div className="wishes">
        {wishes.map((wish, index) => (
          <div key={index} className="wish-card">
            <h2>Wish {index + 1}</h2>
            <p>{wish}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

