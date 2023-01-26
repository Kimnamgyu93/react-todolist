import "./App.css";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Header from "./components/Header/Header";
import AddForm from "./components/AddForm/AddForm";
import TodoList from "./components/TodoList/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Header>My to do list</Header>
      <AddForm setTodos={setTodos} />
      <div>
        <TodoList name="working" todos={todos} setTodos={setTodos} />
        <TodoList name="Done" todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
