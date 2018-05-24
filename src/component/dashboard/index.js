import React from 'react';
import uuid from 'uuid/v4';
import autoBind from '../../utils';
import noteForm from '../noteForm';

// Dashboard Component
// The dashboard component should manage the entire application state.
// It should have a bound removeNote(note) method that removes a note from state.notes
//  based on its id

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      content: '',
      title: '',
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
        title: '',
        content: '',
        error: null, 
      };
    });
  }
  render() {
    return (
      <section className="dashboard">
        <h1>Note Form</h1>
        <noteForm 
          handleAddNote={this.handleAddNote} 
        />
        { this.state.error && <h2 className="error">You must enter a title.</h2> }
      </section>
    );
  }
  // handleRemoveNotes(note) {
    
  //   // note is the note object which has properties. 
  //   // compare it to the other note ids in the array in the dashboard
  //   // have a conditional where all note ids do not match this particular note id
  //   // filter through the array?
  //   // filter through where a note doesn't match the unique id. 
  // }
}
