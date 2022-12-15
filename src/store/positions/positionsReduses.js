import { ADD_POSITIONS } from './positionsActions';
export const positionReduser = (state = [], action) => {
  switch (action.type) {
    case ADD_POSITIONS: {
      return action.positions;
    }

    default: {
      return state;
    }
  }
};
