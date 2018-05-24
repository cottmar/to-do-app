import React from 'react';
import NoteItem from '../noteItem';

export default class NoteList extends React.Component {
  render() {
    return (
      <div> 
          <ul className="noteList">
            {
              this.props.notes.map((note) => {
                return <NoteItem
                  key={note.id}
                  content={note.content}
                  title={note.title}
                  id={note.id}
                />;
              })}
          </ul>
      </div>
    );
  }
}
