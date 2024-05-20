import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [ selCat, setSelCat ] = useState('All');
  function handleFilter(event) {
    setSelCat(event.target.value);
  };
  const itemsDisplay = items.filter((item) => {
    if (selCat === 'All') return true;
    return item.category === selCat
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
