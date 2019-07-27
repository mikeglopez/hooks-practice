import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [list, addToList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addToList([...list, document.getElementById('listItem').value]);
  }

  useEffect(() => {
    document.title = `Shopping List: ${list.length}`;
  });

  return (
    <div className="App">
      <h1>My Shopping List: {list.length} Items</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="listItem" /> <input type="submit" value="Add" id="submit" />
      </form>
      {list.map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </div>
  );
}

export default App;
