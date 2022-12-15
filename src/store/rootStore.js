import { combineReducers } from 'redux';
import { positionReduser } from './positions/positionsReduses';
import { filterReduser } from './filtres/filterReduser';
export const rootRedusers = combineReducers({
  position: positionReduser,
  filter: filterReduser,
});
