import React, {useEffect, useRef, useState} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './Todos.css';

function App() {
  const [todos,setTodos] = useState(()=> JSON.parse(localStorage.getItem("todos")) || []);
  const no = useRef(todos.length);

  const localSave = () => {
    console.log('localSave',{todos});
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  useEffect(() => {
    localSave();
  }, [todos])

  const onAdd = (text) => {
    setTodos(prevState => {
      return [
        ...prevState,
        {
          id:no.current++,
          text:text,
          done:false,
          edit:false
        }
      ]
    })
  }

  const onDel = (id) =>{
    setTodos(prevState => prevState.filter(todo=>todo.id !== id));
  }

  const onToggle = (id) => {
    setTodos(prevState => prevState.map(todo=>todo.id === id?
      {
        ...todo,
        done:!todo.done
      }
      : todo
      ));
  }

  const onEdit = (id, text) => {
    setTodos(prevState => prevState.map(todo=>todo.id === id?
      {
        ...todo,
        text:text,
        edit:!todo.edit
      }
      : todo
      ))
  }

  return (
    <div className="Todos">
      <h1>Todo List</h1>
      <TodoInput onAdd={onAdd}/>
      <TodoList todos={todos} onDel={onDel} onToggle={onToggle} onEdit={onEdit}/>
    </div>
  );
}

export default App;
