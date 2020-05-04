import React from 'react';
import '../css/comment.css';

const Comment = (props) => {
  return (<li>
    {props.text}
    <p>Автор: {props.author}<br /> Дата поста: {props.date} Время поста: {props.time}</p>
    <button id={props.id} onClick={props.delete}>Удалить</button>
  </li>)
}

export default Comment;
