import React from "react";
import "./style.css";
import Button from "../Button/Button";

export default function Todo({ todo, isDone, id, setTodos }) {
  const deleteTodo = () => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const cancelTodo = () => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          return { ...t, isDone: false };
        }
        return t;
      })
    );
  };

  const doneTodo = () => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          return { ...t, isDone: true };
        }
        return t;
      })
    );
  };

  return (
    <li id={id} key={id}>
      <p>{todo}</p>
      <div>
        <Button handleClick={deleteTodo} value="삭제" />
        {isDone ? (
          <Button handleClick={cancelTodo} value="취소" />
        ) : (
          <Button handleClick={doneTodo} value="완료" />
        )}
      </div>
    </li>
  );
}
