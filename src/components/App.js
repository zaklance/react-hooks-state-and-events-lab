import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
// import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [ appTheme, setAppTheme ] = useState(false);
  function handleThemeClick() {
    setAppTheme(!appTheme);
  };

  const appClass = appTheme ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleThemeClick}>{appTheme ? 'Dark' : 'Light'} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
