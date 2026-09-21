import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from '../reducers/cardsSlice';
import { loadState, saveState } from "./localstorage";
const persistedState = loadState();

export const store = configureStore({
    reducer: {
        cards: cardsReducer,
    },
    preloadedState: persistedState
});
store.subscribe(() => {
    saveState(store.getState());
});