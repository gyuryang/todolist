import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

interface todolist{
    id: number;
    text: string;
    done: boolean;
    edit: boolean;
}

interface ListProps{
    todos: Array<todolist>;
    onDel(id: number): void;
    onToggle(id: number): void;
    onEdit(id: number, text: string): void;
}

const TodoList = ({todos,onDel,onToggle,onEdit}: ListProps) =>{
    return(
        <ul className='TodoList'>
            {
                todos.map(todo=><TodoItem key={todo.id} todo={todo} onDel={onDel} onToggle={onToggle} onEdit={onEdit}/>)
            }
        </ul>
    )
}

export default TodoList;