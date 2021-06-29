import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

const App = () => {
  const [inputList, setInputList] = useState();
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="div1">
        <div className="div2">
          <h1 className="header">todocatalogue</h1>
          <div className="div3">
            <input
              className="inputfield"
              type="text"
              placeholder="add an item"
              value={inputList}
              onChange={itemEvent}
            ></input>
            <button className="btn" onClick={listOfItem}>
              +
            </button>
          </div>
          <div>
          {/* <ol className="list"> */}
            {items.map((item, index) => {
              return (
                <Todo
                  key={index}
                  id={index}
                  text={item}
                  onSelect={deleteItem}
                />
              );
            })}
          {/* </ol> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
