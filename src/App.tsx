import React, { useEffect } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Todos from './components/Todos/Todos';
import { ITodos } from './components/Types/Types'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';


function App() {
  const [todos, setTodos] = React.useState<ITodos>(JSON.parse(`${localStorage.getItem('todos')}`) || { todos: [] });
  useEffect(() => {
    // setTodos(JSON.parse(`${localStorage.getItem('todos')}`))

    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  const addTodos = (title: string) => {
    setTodos({
      todos: [
        { title, completed: false, id: todos.todos.length + 1 },
        ...todos.todos
      ]
    });
  };
  const deleteTodos = (id: number) => {
    setTodos({
      todos: todos.todos.filter(t => t.id !== id)
    });
  };
  const toggleTodos = (id: number) => {
    setTodos({
      todos: todos.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    });
  }

  return (
    <div className="App">
      <Box bgcolor="info.main" sx={{ height: '100vh' }}>
        <Box width="50%" sx={{ pt: 10, mx: 'auto' }}>
          <Paper elevation={3}>
            <AddTodo addTodos={addTodos} />

            <Todos
              todos={todos}
              toggleTodos={toggleTodos}
              deleteTodos={deleteTodos} />
          </Paper>
        </Box>
      </Box>
    </div >
  );
}





export default App;