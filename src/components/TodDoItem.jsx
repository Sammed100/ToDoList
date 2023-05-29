import React, { useState } from "react";

function TodoItem(props) {
  const [isClick, setIsClick] = useState(false);
  function handleClick() {
    setIsClick((prev) => {
      if (prev === false) {
        return true;
      } else {
        return false;
      }
    });
  }
  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isClick ? "line-through" : null }}
    >
      {props.text}
    </li>
  );
}

export default TodoItem;
