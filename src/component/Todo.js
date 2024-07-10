import { Card, Grid, ListItemButton, ListItemText, Checkbox } from "@mui/material";

export default function Todo({ todo }) {
  let color = "#ffffffff"
  if (new Date(todo.Current_date) < new Date()) {
    color = '#B00020'
  }

  return (
    <Grid key={todo.ID}>
      <Card data-testid={todo.Task ?? todo.task} style={{ marginTop: 10, background: color }}>
        <ListItemButton component="a" href="#simple-list">
          <Checkbox style={{ paddingLeft: 0 }} color="primary" />
          <ListItemText primary={todo.Task ?? todo.task} secondary={todo.Current_date ?? todo.dueDate} />
        </ListItemButton>
      </Card>
    </Grid>
  )
}
