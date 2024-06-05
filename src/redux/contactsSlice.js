import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../contacts.json";

const slice = createSlice({
  name: "contacts",
  initialState: { contacts: initialContacts },
  reducers: {
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
  },
});

export const { deleteContact, addContact } = slice.actions;

export const selectContacts = (state) =>
  state.contacts.contacts;

export default slice.reducer;
