import classNames from 'classnames';
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank, MdEdit } from 'react-icons/md';
import { FaRegTrashAlt } from "react-icons/fa";
import { useRef, useState } from 'react';

const ICON_COLOR = 'rgb(175,169,169)'
const ICON_SIZE = '20'

interface todolist{
    id: number;
    text: string;
    done: boolean;
    edit: boolean;
}

interface ItemProps{
    todo: todolist;
    onDel(id: number): void;
    onToggle(id: number): void;
    onEdit(id: number, text: string): void;
}

const TodoItem = ({ todo, onDel, onToggle, onEdit }: ItemProps) => {

  const { id, text, done, edit } = todo;
  const textRef = useRef();
  const [cText,setCText] = useState(text);

  const setToggleId = () => onToggle(id);

  const setDelId = () => onDel(id);

  const setEditId = () => onEdit(id,cText);

  const changeInput = (evt: React.ChangeEvent<HTMLInputElement>) =>{
    const {value} = evt.target;
    setCText(value);
  }

  return (
    <div>
      <li className={classNames({ on: done })}>
        <span onClick={setToggleId}>
          {done ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
        </span>
        {edit ? <input type='text' value={cText} /*ref={textRef}*/ onChange={changeInput}/> : <em onClick={setToggleId}>{text}</em>}
        <button onClick={setDelId}><FaRegTrashAlt color={ICON_COLOR} size={ICON_SIZE} /></button>
        <button onClick={setEditId}><MdEdit color={ICON_COLOR} size={ICON_SIZE} /></button>
      </li>
    </div>
  );
}

export default TodoItem;