import React from 'react';
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Alignment,
  InputGroup,
  Button,
} from '@blueprintjs/core';
import { dispatch } from '@rematch/core';

const newNoteTemplate = {
  title: '',
  content: '',
};

const NavBar = () => (
  <Navbar fixedToTop className="bp3-dark">
    <div className="container">
      <NavbarGroup>
        <NavbarHeading>Notes App</NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Button
          text="New Note"
          icon="plus"
          minimal
          onClick={() => dispatch.note.updateEditableNote(newNoteTemplate)}
        />
        <NavbarDivider />
        <InputGroup
          type="search"
          placeholder="Search notes..."
          onChange={event => dispatch.note.setSearchTerm(event.target.value)}
          leftIcon="search"
        />
      </NavbarGroup>
    </div>
  </Navbar>
);

export default NavBar;