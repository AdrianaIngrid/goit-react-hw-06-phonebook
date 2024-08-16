import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialStateContacts = {
  contacts: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],
};
export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialStateContacts,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(contact) {
                return {
                    payload: {
                        ...contact,
                        id: nanoid(),
                    },
            
                };
            },
            
        },
        deleteContact: {
            reducer(state, action) {
               const index = state.contacts.findIndex(
                 contact => contact.id === action.payload.id
               );
               state.contacts.splice(index, 1);
            },
            prepare(contactId) {
                return {
                    payload: {
                        id: contactId
                    }
        };
            },
        },
        
    },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
