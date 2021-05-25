import { FETCHED_EMPLOYERS, SET_EMPLOYERS, SET_FETCHING } from '../redux/ducks/employers';

export type Employers = Array<string>;

export type InitialState = {
  employers: Employers,
  isFetching:boolean
};

export type ActionTypes =  SetEmployersListAction | SetFetching | FetchedEmployersAction;

export type FetchedEmployersAction = {
  type:typeof FETCHED_EMPLOYERS
};

export type SetEmployersListAction = {
  type:typeof SET_EMPLOYERS,
  employers:Employers
};

export type SetFetching = {
  type:typeof SET_FETCHING,
  isFetching:boolean
};
