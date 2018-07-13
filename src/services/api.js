import axios from 'axios';
import { apiUri } from '../config/paths';

export default class Api {
  static async fetchNotes() {
    const response = await axios.get(`${apiUri}notes`);
    return response.data.data;
  }

  static async saveNote(note) {
    const response = note && note.id
      ? await axios.put(`${apiUri}notes/${note.id}`, note)
      : await axios.post(`${apiUri}notes`, note);
    return response.data.data;
  }

  static async deleteNote(noteId) {
    const response = await axios.delete(`${apiUri}notes/${noteId}`);
    return response.data;
  }
}
