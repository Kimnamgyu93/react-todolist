import React from "react";
import "./style.css";
import Todo from "../Todo/Todo";

export default function TodoList({ name, todos, setTodos }) {
  const isWokingList = name === "working" ? true : false;

  return (
    <div>
      <h2>{isWokingList ? "Working!!" : "Done :)"}</h2>
      {todos
        .filter((t) => isWokingList === !t.isDone)
        .map((t) => (
          <Todo
            todo={t.todo}
            isDone={t.isDone}
            setTodos={setTodos}
            key={t.id}
            id={t.id}
          />
        ))}
    </div>
  );
}
