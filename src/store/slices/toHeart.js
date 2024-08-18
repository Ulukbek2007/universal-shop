import { createSlice } from "@reduxjs/toolkit";

// Function to load the initial state from localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('heartState');
    if (serializedState === null) {
      return { heart: [] }; // Return default state if no state found in localStorage
    }
    return JSON.parse(serializedState); // Parse and return the stored state
  } catch (err) {
    console.error("Failed to load state from localStorage", err);
    return { heart: [] }; // Return default state if an error occurs
  }
};

// Function to save state to localStorage
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('heartState', serializedState);
  } catch (err) {
    console.error("Failed to save state to localStorage", err);
  }
};

// Load initial state
const initialState = loadStateFromLocalStorage();

const toHeart = createSlice({
  name: "toHeart",
  initialState,
  reducers: {
    pushHeart: (state, { payload }) => {
      const fill = state.heart.filter((el) => el.id === payload.id);
      if (fill.length === 0) {
        state.heart.push(payload); // Directly mutate state since immer is used
        saveStateToLocalStorage(state); // Save the updated state to localStorage
      }
    },
    removeHeart: (state, { payload }) => {
      state.heart = state.heart.filter((el) => el.id !== payload.id);
      saveStateToLocalStorage(state); // Save the updated state to localStorage
    }
  },
});

export const { pushHeart, removeHeart } = toHeart.actions;
export default toHeart;
