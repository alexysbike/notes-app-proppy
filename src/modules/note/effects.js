import api from "../../services/api";

const effects = {
  async fetchNotes() {
    try {
      const data = await api.fetchNotes();
      const notes = {};
      data.forEach((note) => { notes[note.id] = note; });
      this.updateNotes(notes);
    } catch (error) {
      throw (error)
    }
  },
  async saveNote(note) {
    try {
      const data = await api.saveNote(note);
      const notes = {
        [data.id]: data,
      };
      this.updateNotes(notes);
      this.updateEditableNote(null);
    } catch (error) {
      throw (error)
    }
  },
  async deleteNote(note) {
    try {
      await api.deleteNote(note.id);
      this.successDeleteNote(note.id);
    } catch (error) {
      throw (error)
    }
  },
};

export default effects;
