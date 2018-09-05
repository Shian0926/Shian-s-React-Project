import { INCREASE_COUNTER, DECREASE_COUNTER } from '../actions/actionDemo';

const initialState = {
  counter: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + action.number,
      };
    case DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter - action.number,
      };
    default:
      return state
  }
}
