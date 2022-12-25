import React, { useEffect, useState } from "react";
import "../App.css";

const Todo = () => {
  const [items, setItems] = useState("");
  const [list, setList] = useState([]);

  const handleCLick = (e) => {
    e.preventDefault();
    setItems("");

    if (items === "") {
      alert("Add new Elemen");
    } else {
      const item = {
        id: Math.floor(Math.random() * 1000),
        value: items,
      };

      setList((oldItem) => [...oldItem, item]);
    }
  };

  const handleRemove = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  return (
    <div className="App">
      <h2>Todo-List</h2>
      <div className="wrapper">
        <form className="form" onSubmit={handleCLick}>
          <input
            placeholder="add item..."
            onChange={(e) => setItems(e.target.value)}
          />
          <button onClick={handleCLick}>Add</button>
        </form>

        <ul>
          {list.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.value}</span>
                <button onClick={() => handleRemove(item.id)}>x</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
