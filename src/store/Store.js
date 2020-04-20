import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {LOAD_USERS, SELECT_USER} from './Actions.js'
import { combineReducers } from 'redux'

function usersReducer(state = {}, action) {
  if (action.type === LOAD_USERS){
    return action.users;
  }
  return state;
}

function selectedUserReducer(state = null, action) {
  if (action.type === SELECT_USER){
    return action.selectedUser;
  }
  return state;
}

const store = createStore(combineReducers({
  users: usersReducer,
  selectedUser: selectedUserReducer
}), applyMiddleware(thunk));

export default store;
