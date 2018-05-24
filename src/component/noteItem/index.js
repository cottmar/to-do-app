// should display the notes content and title
// should display a delete button
// onClick the note should be removed from the application state
// import noteForm from '../noteForm';

import React from 'react';
import autoBind from './../../utils';
// import noteForm from '../noteForm'

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
    };
    autoBind.call(this, NoteItem);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleDisplayNote(this.state);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
     <li id={this.props.id}>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
        <button onClick={() => this.props.handleRemoveNote(this.props.note)}>delete here</button>
      </li>
    );
  }
}
