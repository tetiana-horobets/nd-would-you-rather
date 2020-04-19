import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {LOAD_USERS} from './Actions.js'
import { combineReducers } from 'redux'

function users(state = {}, action) {
  if (action.type === LOAD_USERS){
    return action.users;
  }
  return state;
}

const store = createStore(combineReducers({users}), applyMiddleware(thunk));

export default store;
