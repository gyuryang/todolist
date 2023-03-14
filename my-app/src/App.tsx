import React, {useEffect, useRef, useState} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './Todos.css';

interface todolist {
  id: number;
  text:string;
  done:boolean;
  edit:boolean;
}

function App() {
  const save: any = localStorage.getItem("todos");
  const [todos,setTodos] = useState(() => JSON.parse(save) || []);
  const no = useRef(todos.length);

  const localSave = () => {
    console.log('localSave',{todos});
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  useEffect(() => {
    localSave();
  }, [todos])

  const onAdd = (text: string) => {
    setTodos((todos: Array<todolist>) => {
      return [
        ...todos,
        {
          id:no.current++,
          text:text,
          done:false,
          edit:false
        }
      ]
    })
  }

  const onDel = (id: number) =>{
    setTodos((todos: Array<todolist>) => todos.filter(todo=>todo.id !== id));
  }

  const onToggle = (id: number) => {
    setTodos((todos: Array<todolist>) => todos.map(todo=>todo.id === id?
      {
        ...todo,
        done:!todo.done
      }
      : todo
      ));
  }

  const onEdit = (id: number, text: string) => {
    setTodos((todos: Array<todolist>) => todos.map(todo=>todo.id === id?
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