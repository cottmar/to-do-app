import React from 'react';
import uuid from 'uuid/v4';
import autoBind from '../../utils';

// Dashboard Component
// The dashboard component should manage the entire application state.
// The state should contain a notes array
// It should have a bound addNote(note) method that adds a note to state.notes
// each note that is added should have the following data
// id: always should contain the result of uuid.v1()
// content: user provided content
// title: user provided title
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
    if (notes.title === '' && notes.content === '') {
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
}
