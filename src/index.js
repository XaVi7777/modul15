import React from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './components/CommentApp';

const body = document.querySelector('body');
const child = document.createElement('div');
child.setAttribute('id', 'app');
body.appendChild(child);

ReactDOM.render(
  <CommentApp />,
  document.querySelector('#app')
)
