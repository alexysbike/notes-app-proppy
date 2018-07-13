import React from 'react';
import { compose, withHandlers } from 'proppy';
import { attach } from 'proppy-react';
import { withStore } from 'proppy-redux';
import { dispatch } from '@rematch/core';

const P = compose(
  withStore(state => ({
    note: state.note.editableNote,
  })),
  withHandlers({
    saveModal: ({ note }) => () => {
      dispatch.note.saveNote(note);
    },
  }),
);

const requiredFields = ['title', 'content'];

const ModalForm = ({ note, saveModal }) => {
  if (!note) {
    return null;
  }
  const cancelModal = () => dispatch.note.updateEditableNote(null);
  const missingFields = requiredFields.filter(field => !note[field]);
  const alert = !missingFields.length
    ? null
    : (
      <div className="notification is-danger">
        {`Fields required: ${missingFields.join(', ')}`}
      </div>
    );
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={cancelModal} />
      <div className="modal-content">
        <div className="box">
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Note Title..."
                value={note.title}
                onChange={({target}) => dispatch.note.updateEditableNote({...note, title: target.value})}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Content</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Note Content"
                value={note.content}
                onChange={({target}) => dispatch.note.updateEditableNote({...note, content: target.value})}
              />
            </div>
          </div>
          {alert}
          <div className="field is-grouped">
            <div className="control">
              <button disabled={missingFields.length} className="button is-link" onClick={saveModal}>{!note.id ? 'Add' : 'Save'}</button>
            </div>
            <div className="control">
              <button className="button" onClick={cancelModal}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" onClick={cancelModal} aria-label="close" />
    </div>
  );
};

export default attach(P)(ModalForm);
