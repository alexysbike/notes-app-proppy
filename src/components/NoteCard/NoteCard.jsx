import React from 'react';
import { attach } from 'proppy-react';
import { withCustomStore } from '../../customWithStore';
import { select } from '@rematch/select';
import { dispatch } from '@rematch/core';

const P = withCustomStore((state, { noteId }) =>
  ({
    note: select.note.noteByIdSelector(state, {noteId}),
  }));

const NoteCard = ({ note }) => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          {note.title}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {note.content}
        </div>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <button className="button" onClick={() => dispatch.note.updateEditableNote(note)}>Edit</button>
        </p>
        <p className="card-footer-item">
          <button className="button" onClick={() => dispatch.note.deleteNote(note)}>Delete</button>
        </p>
      </footer>
    </div>
  );
};

export default attach(P)(NoteCard);
