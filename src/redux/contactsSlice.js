import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksInitialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const tasksSlice = createSlice({
  name: "contacts",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name) {
        return {
          payload: {
            name,
            id: nanoid(),
            number:'',
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex((contact) => contact.id === action.payload);
      state.splice(index, 1);
    },
    
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
