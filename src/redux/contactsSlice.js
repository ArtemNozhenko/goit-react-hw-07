import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "./contactsOps";

const slice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
        state.loading = false;
      });
  },
});

export const selectContacts = (state) =>
  state.contacts.contacts;
export const selectLoading = (state) =>
  state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export default slice.reducer;
// export const { deleteContact, addContact } = slice.actions;

// export const selectContacts = (state) =>
//   state.contacts.contacts;

//  {
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(
//         (contact) => contact.id !== action.payload
//       );
//     },
//     addContact: (state, action) => {
//       state.contacts.push(action.payload);
//     },
