import {LOCALSTORAGE_ENTRY} from '../config';

export const localStorageWrapper = {
  load: (tagName) => JSON.parse(localStorage.getItem(tagName)) || {},
  save: (tagName, data) => localStorage.setItem(tagName, JSON.stringify(data))
};

export const loadStateFromLocalStorage = () => {
  const state = localStorageWrapper.load(LOCALSTORAGE_ENTRY);
  return Object.keys(state).length ? state : {};
};