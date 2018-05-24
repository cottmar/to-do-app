// NoteList Component
// should display an unordered list of NoteItem components
import React from 'react';
import NoteItem from '../noteItem';

export default class NoteList extends React.Component {
  render() {
    return (
      <div> 
          <ul className="noteList">
            {
              this.props.notes.map((note) => {
                return (
                  <li key={note.id}>
                  <NoteItem notes={note} handleRemoveNotes={this.props.handleRemoveNotes}/>
                  </li>
                );
              })
            }
          </ul>
      </div>
    );
  }
}
