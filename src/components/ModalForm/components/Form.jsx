import React from 'react';
import { dispatch } from '@rematch/core';
import { Classes, Button, Intent, FormGroup, InputGroup, TextArea, Callout } from '@blueprintjs/core';

const requiredFields = ['title', 'content'];

const Form = ({ note, saveModal, cancelModal }) => {
  if (!note) {
    return null;
  }
  const missingFields = requiredFields.filter(field => !note[field]);
  const alert = !missingFields.length
    ? null
    : (
      <Callout
        intent={Intent.DANGER}
        title={`Fields required: ${missingFields.join(', ')}`}
      />
    );
  return (
    <React.Fragment>
      <div className={Classes.DIALOG_BODY}>
        <FormGroup
          label="Title"
          labelFor="form-title"
          labelInfo="(required)"
        >
          <InputGroup
            id="form-title"
            type="text"
            placeholder="Note Title..."
            value={note.title}
            onChange={({target}) => dispatch.note.updateEditableNote({...note, title: target.value})}
          />
        </FormGroup>
        <FormGroup
          label="Content"
          labelFor="form-content"
          labelInfo="(required)"
        >
          <TextArea
            fill
            id="form-content"
            placeholder="Note Content"
            value={note.content}
            onChange={({target}) => dispatch.note.updateEditableNote({...note, content: target.value})}
          />
        </FormGroup>
        {alert}
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Button disabled={missingFields.length} intent={Intent.PRIMARY} onClick={saveModal}>{!note.id ? 'Add' : 'Save'}</Button>
          <Button onClick={cancelModal}>Cancel</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
