import { combineReducers } from 'redux';

import employers from './employers';
import searchedName from './searchedName';
import subordinates from './subordinates';

export default combineReducers({
  employers: employers,
  searchedName: searchedName,
  subordinates: subordinates
});
