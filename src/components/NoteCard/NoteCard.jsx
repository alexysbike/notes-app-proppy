import React from 'react';
import { attach } from 'proppy-react';
import { select } from '@rematch/select';
import { dispatch } from '@rematch/core';
import {
  Card,
  Elevation,
  H3,
  ButtonGroup,
  Button,
} from '@blueprintjs/core';
import { withCustomStore } from '../../customWithStore';

const P = withCustomStore((state, { noteId }) =>
  ({
    note: select.note.noteByIdSelector(state, {noteId}),
  }));
const NoteCard = ({ note }) => {
  return (
    <Card elevation={Elevation.TWO}>
      <H3>
        {note.title}
      </H3>
      <div className="bp3-running-text">
        {note.content}
      </div>
      <div style={{ textAlign: 'right' }}>
        <ButtonGroup minimal>
          <Button icon="edit" onClick={() => dispatch.note.updateEditableNote(note)} />
          <Button icon="trash" onClick={() => dispatch.note.deleteNote(note)} />
        </ButtonGroup>
      </div>
    </Card>
  );
};

export default attach(P)(NoteCard);
