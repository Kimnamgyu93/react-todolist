import React, { useState } from "react";
import uuid from "react-uuid";
import "./style.css";
import Button from "../Button/Button";

export default function AddForm({ setTodos }) {
  const [todoValue, setTodoValue] = useState("");
  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };
  const addTodo = (event) => {
    event.preventDefault();

    const todo = todoValue.trim();
    if (!todo) {
      setTodoValue("");
      return;
    }

    setTodos((prev) => [...prev, { todo, isDone: false, id: uuid() }]);
    setTodoValue("");
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <label htmlFor="new-todo">To Do </label>
        <input
          type="text"
          id="new-todo"
          name="new-todo"
          onChange={handleChange}
          autoFocus={true}
          value={todoValue}
          placeholder="목표를 적어주세요."
        />
        <Button value="등록" />
      </form>
    </div>
  );
}
