import React, { useEffect, useState, useTransition } from "react";
import Axios from "axios";
import Todo from "./Todo";


export default function ShowTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, getTodos] = useTransition();

  useEffect(() => {
    getTodos(async () => {
      try {
        const res = await Axios.get('http://localhost:8080/get/items');
        setTodos(res.data);
      } catch (err) {
        console.log(err);
      }
    })
  }, [])

  if (loading) {
    return <div>Todos loading...</div>
  }

  return <div>
    {
      todos.map((todo) => {
        return (
          <Todo todo={todo} />
        )
      })}
  </div>
}
