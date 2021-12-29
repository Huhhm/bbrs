import {combineReducers} from 'redux';
import {LOGOUT} from '../../constants/actionTypes';
import common from './common';

const appReducer = combineReducers({
  common,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
