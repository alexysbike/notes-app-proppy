import update from "immutability-helper/index";

export const initialState = {
  notes: {},
  searchTerm: '',
  editableNote: null,
};

export const reducers = {
  updateNotes(state, notes) {
    return update(state, {
      notes: { $merge: notes },
    });
  },
  setSearchTerm(state, searchTerm) {
      return update(state, {
        searchTerm: { $set: searchTerm },
      });
  },
  updateEditableNote(state, note) {
      return update(state, {
        editableNote: { $set: note },
      });
  },
  successDeleteNote(state, noteId) {
      return update(state, {
        notes: {
          $apply: function(obj) {
            const copyNotes = {...obj};
            delete copyNotes[noteId];
            return copyNotes;
          },
        },
      });
  },
};
