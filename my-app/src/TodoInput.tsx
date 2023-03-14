import React, {useRef, useState} from 'react';
import {MdAddCircle} from "react-icons/md";
import './todoInput.css';

interface InputProps{
    onAdd(text: string): void;
}

const TodoInput = ({onAdd}:InputProps)=>{
    const textRef = useRef();
    const [text,setText] = useState('');

    const changeInput = (evt: React.ChangeEvent<HTMLInputElement>) =>{
        const {value} = evt.target;
        setText(value);
    }

    const onSubmit = (evt: React.FormEvent<HTMLFormElement>) =>{
        evt.preventDefault();

        if(!text) return;

        onAdd(text);

        setText('');
        // textRef.current.focus();
    }

    return(
        <form className='TodoInput' onSubmit={onSubmit}>
            <input type='text' value={text} onChange={changeInput} /*ref={textRef}*/ />
            <button>
                <MdAddCircle className='icon' size='40'>
                </MdAddCircle>
            </button>
        </form>
    )
}

export default TodoInput;