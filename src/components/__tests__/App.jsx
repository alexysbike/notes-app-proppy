import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Navbar from '../NavBar';
import NotesWrapper from '../NotesWrapper';

describe('Component App', () => {
  const mockedProps = {
    fetchNotes: jest.fn(),
  };
  describe('render', () => {
    test('Must have a Navbar and a NotesWrapper component', () => {
      const wrapper = shallow(<App {...mockedProps} />);
      expect(wrapper.find(Navbar).length).toBe(1);
      expect(wrapper.find(NotesWrapper).length).toBe(1);
    });
  });
});