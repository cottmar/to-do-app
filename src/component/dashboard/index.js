import React from 'react';
import uuid from 'uuid/v4';
import autoBind from '../../utils';
import NoteForm from '../noteForm';

// Dashboard Component
// The dashboard component should manage the entire application state.
// It should have a bound removeNote(note) method that removes a note from state.notes
//  based on its id

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      error: null,
    };

    autoBind.call(this, Dashboard);
  }

  handleAddNotes(notes) {
    if (notes.title === '') {
      return this.setState({ error: true });
    }
    if (notes.content === '') {
      return this.setState({ error: true });
    }

    notes.createdOn = new Date();
    notes.id = uuid();

    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, notes],
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

  handleRemoveNotes(note) {
    return this.setState((previousState) => {
      const filterNotes = previousState.notes.filter((item) => {
        return item.id !== note.id;
      });
      return {
        notes: filterNotes,
        error: null,
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
        { this.state.error && <h2 className="error">You must enter a title.</h2> }
        <p>Just do it.</p>
        { this.handleNotesList(this.state) }
        <p> All notes: { this.handleNotesList(this.state) } </p>
      </section>
    );
  }
}
