import { SET_SEARCHED_NAME } from '../redux/ducks/searchedName';

export type ActionsTypes = typeof SET_SEARCHED_NAME;

export type InitialState = {
  searchedName: string
};

export type SearchNameAction = {
  type: typeof SET_SEARCHED_NAME,
  searchedName: string
};
