import React from 'react';
import { dispatch } from '@rematch/core';
import { attach } from 'proppy-react';
import { didSubscribe } from 'proppy';
import NavBar from '../NavBar';
import NotesWrapper from '../NotesWrapper';
import ModalForm from "../ModalForm";
import './App.css';

const P = didSubscribe(() => {
  dispatch.note.fetchNotes();
});

const App = () =>
  (
    <React.Fragment>
      <NavBar/>
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <NotesWrapper/>
          </div>
        </div>
      </div>
      <ModalForm/>
    </React.Fragment>
  );

export default attach(P)(App);
