import {
  CHANGE_MODE,
} from './actions';

const INITIAL_STATE = {
  realMode: true,
  test: 30,
};

export default function robots(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        realMode: !state.realMode,
      };
    default:
      return state;
  }
}
