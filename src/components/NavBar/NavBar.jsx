import React from 'react';
import { dispatch } from '@rematch/core';

const NavBar = () => (
  <div className="navbar is-fixed-top is-black">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item brand-text">
          Notes App
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <input
              className="input"
              type="text"
              placeholder="Search notes..."
              onChange={event => dispatch.note.setSearchTerm(event.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NavBar;