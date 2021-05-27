import {
  CREATE_ROBOT,
} from './actions';

const INITIAL_STATE = {
  test: 30,
};

export default function robots(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_ROBOT:
      return {
        ...state,
        test: action.test,
      };
    default:
      return state;
  }
}
