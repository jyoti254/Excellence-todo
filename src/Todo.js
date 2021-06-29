import React from "react";

const Todo = (props) => {
  return (
    <div className="todoListContainer" >
      <div>{props.text}</div>
      <div>
      <button
        className="btn2"
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        *
      </button>
      </div>
    </div>
  );
};
export default Todo;
