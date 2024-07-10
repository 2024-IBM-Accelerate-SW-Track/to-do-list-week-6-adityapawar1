import React from "react";
import "../component/todos.css";
import { Card, Grid, ListItemButton, ListItemText, Checkbox } from "@mui/material";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      let color = "#ffffffff"
      if (new Date(todo.duedate) < new Date()) {
        color = 'red'
      }
      console.log(color)
      return (
        <Grid key={todo.id}>
          <Card data-testid={todo.content} style={{ marginTop: 10, background: color }}>
            <ListItemButton component="a" href="#simple-list">
              <Checkbox style={{ paddingLeft: 0 }} color="primary" onClick={() => deleteTodo(todo.id)} />
              <ListItemText primary={todo.content} secondary={todo.duedate} />
            </ListItemButton>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left </p>
  );
  // Lastly, return the todoList constant that we created above to show all of the items on the screen.
  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
