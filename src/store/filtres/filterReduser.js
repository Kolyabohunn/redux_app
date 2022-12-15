import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from './filtersActions';
export const filterReduser = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER: {
      if (state.includes(action.filter)) {
        return state;
      }
      return [...state, action.filter];
    }
    case REMOVE_FILTER: {
      return state.filter((st) => st !== action.filter);
    }
    case CLEAR_FILTER: {
      return [];
    }

    default: {
      return state;
    }
  }
};
