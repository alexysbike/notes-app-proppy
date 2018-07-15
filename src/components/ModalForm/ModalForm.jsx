import React from 'react';
import { compose, withHandlers } from 'proppy';
import { attach } from 'proppy-react';
import { withStore } from 'proppy-redux';
import { dispatch } from '@rematch/core';
import { Dialog } from '@blueprintjs/core';
import Form from './components/Form';

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
const ModalForm = ({ note, saveModal }) => {
  const cancelModal = () => dispatch.note.updateEditableNote(null);
  return (
    <Dialog
      isOpen={!!note}
      onClose={cancelModal}
    >
      <Form note={note} saveModal={saveModal} cancelModal={cancelModal} />
    </Dialog>
  );
};

export default attach(P)(ModalForm);
