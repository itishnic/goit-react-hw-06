import { createSlice,  } from "@reduxjs/toolkit";

const contactsInitialState = {
  items: [],
};



const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    deleteContact: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
  },
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
