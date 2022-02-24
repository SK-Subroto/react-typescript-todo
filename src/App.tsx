import React, { useEffect } from 'react';
import './App.css';
import Todo from './components/Todo/Todo';
import Todos from './components/Todos/Todos';
import { ITodos } from './components/Types/Types'


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
      <Todo addTodos={addTodos} />
      <hr />
      <Todos
        todos={todos}
        toggleTodos={toggleTodos}
        deleteTodos={deleteTodos} />
    </div>
  );
}





export default App;