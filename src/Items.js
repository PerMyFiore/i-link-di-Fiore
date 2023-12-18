import React, { useState, useEffect } from 'react';
import './Items.css';

const Items = () => {
  const [items, setItems] = useState([]);

  const randomizeItems = () => {
    setItems(items => [...items].sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/PerMyFiore/PerMyFiore.github.io/main/items.json')
      .then(response => response.json())
      .then(data => setItems(data.sort(() => Math.random() - 0.5)))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
        <button className="FioreButton" onClick={randomizeItems}>Randomize</button>
        {items.map((item, index) => (
          <div key={index}>
            <a href={item.url}>{item.name}</a><br/>
            {item.description}
          </div>
        ))}<br/>
    </div>
  );
};

export default Items;