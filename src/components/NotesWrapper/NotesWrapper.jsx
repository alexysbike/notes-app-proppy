import React from 'react';
import { withStore } from 'proppy-redux';
import { attach } from 'proppy-react';
import { select } from '@rematch/select';
import NoteCard from '../NoteCard';

const P = withStore(
  state => ({
    noteIds: select.note.noteIdsSelector(state),
  })
);

const NotesWrapper = ({ noteIds }) => {
  const cards = [...noteIds].reverse().map(noteId => (
      <div className="column is-one-quarter" key={noteId}>
        <NoteCard noteId={noteId} />
      </div>
  ));
  return (
    <div className="columns is-multiline is-mobile">
      {cards}
    </div>
  );
};

export default attach(P)(NotesWrapper);
