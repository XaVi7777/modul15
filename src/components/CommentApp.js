import React from 'react';
import Comment from './Comment';
import showDate from '../showdate';
import showTime from '../showtime';

export default class CommentApp extends React.Component {
  constructor() {
    super();
    // Исходное состоние компонента
    this.state = {
      comments: [],
      addCommentInputValue: '',
      authorInputValue: '',
      error: '',
    }
  }

  componentDidMount() {
    if (localStorage.comments) {
      try {
        this.setState({
          comments: JSON.parse(localStorage.comments),
        })
      } catch (error) {
        if (error) {
          this.setState({
            error: 'Ошибка в чтении данных'
          })
        }
      }
    }
  }

  addComment(event) {
    event.preventDefault();

    let comments = [...this.state.comments, { text: this.state.addCommentInputValue, author: this.state.authorInputValue, date: showDate(), time: showTime() }];

    this.setState({
      comments,
      addCommentInputValue: '',
      authorInputValue: '',
    })
    localStorage.setItem('comments', JSON.stringify(comments));
  }

  deleteComment(event) {
    let comments = JSON.parse(localStorage.comments);
    comments.splice(event.target.id, 1)
    localStorage.setItem('comments', JSON.stringify(comments));
    this.setState({
      comments,
    })
  }

  render() {
    return (<>
      <form onSubmit={this.addComment.bind(this)}>
        <input
          type="text"
          onChange={(event) => this.setState({ addCommentInputValue: event.target.value })} placeholder="Новый комментарий"
          value={this.state.addCommentInputValue}
          required
        />
        <input
          type="text"
          onChange={(event) => this.setState({ authorInputValue: event.target.value })}
          placeholder="Ваше имя"
          value={this.state.authorInputValue}
          required
        />
        <button type="submit">Опубликовать</button>
      </form>
      <ol>
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.comments && this.state.comments.map((element, i) => {
          return <Comment
            id={i}
            key={i}
            text={element.text}
            author={element.author}
            date={element.date}
            time={element.time}
            delete={this.deleteComment.bind(this)} />
        })}
      </ol></>)
  }
}


