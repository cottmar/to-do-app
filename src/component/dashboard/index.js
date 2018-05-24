import React from 'react';
import uuid from 'uuid/v4';
import autoBind from '../../utils';
import NoteForm from '../noteForm';
import NoteList from '../noteList/index';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      error: null,
    };

    autoBind.call(this, Dashboard);
  }

  handleAddNote(notes) {
    if (notes.title === '') {
      return this.setState({ error: true });
    }
    if (notes.content === '') {
      return this.setState({ error: true });
    }

    notes.createdOn = new Date();

    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, notes, { ...notes, id: uuid() }],
        error: null, 
      };
    });
  }

  handleNotesList() {
    return (
      <ul>
        {
          this.state.notes.map((note) => {
            return (
              <li key={note.id}>
              {note.title} : {note.content}
              </li>
            );
          })
        }
      </ul>
    );
  }

  handleRemoveExpense(noteToRemove) {
    this.setState((previousState) => {
      return {
        note: previousState.note.filter(note => note.id !== noteToRemove.id),
      };
    });
  }

  render() {
    return (
      <section className="dashboard">
        <h1>Note Form</h1>
        <NoteForm 
          handleAddNote={this.handleAddNote} 
        />
        <NoteList
          notes={this.state.notes}
        />
        { this.state.error && <h2 className="error">You must enter a title.</h2> }
      </section>
    );
  }
}
