import { SubordinatesResponse } from './api';

import { FETCHED_SUBORDINATES, SET_FETCHING, SET_SUBORDINATES } from '../redux/ducks/subordinates';

export type InitialState = {
  employerData: SubordinatesResponse,
  isFetching:boolean
};
export type ActionsTypes = SetSubordinatesAction | SetFetchedAction | FetchedSubordinatesAction;

export type SetSubordinatesAction = {
  type:typeof SET_SUBORDINATES,
  subordinatesData:SubordinatesResponse
};

export type FetchedSubordinatesAction = {
  type:typeof FETCHED_SUBORDINATES,
  name:string
};

export type SetFetchedAction = {
  type:typeof SET_FETCHING,
  isFetching:boolean
};
