import React, { useState, useEffect } from 'react';
import './Items.css';

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/PerMyFiore/PerMyFiore.github.io/main/items.json')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
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