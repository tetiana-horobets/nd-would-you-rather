import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  LOAD_USERS,
  LOAD_QUESTIONS,
  SELECT_USER,
  LOGOUT
} from './Actions.js'
import { combineReducers } from 'redux'

function usersReducer(state = {}, action) {
  if (action.type === LOAD_USERS){
    return action.users;
  }
  return state;
}

function questionsReducer(state = {}, action) {
  if (action.type === LOAD_QUESTIONS) {
    return action.questions;
  }
  return state;
}

function selectedUserReducer(state = null, action) {
  if (action.type === SELECT_USER) {
    return action.selectedUser;
  }
  if (action.type === LOGOUT) {
    return null;
  }
  return state;
}

const store = createStore(combineReducers({
  users: usersReducer,
  selectedUser: selectedUserReducer,
  questions: questionsReducer,
}), applyMiddleware(thunk));

export default store;
