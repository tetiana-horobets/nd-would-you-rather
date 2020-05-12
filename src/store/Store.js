import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  LOAD_USERS,
  LOAD_QUESTIONS,
  SELECT_USER,
  LOGOUT,
  VOTE,
  CREATE_NEW_QUESTION
} from './Actions.js'
import { combineReducers } from 'redux'

function questionCreatedReducer(state = false, action) {
  if (action.type === CREATE_NEW_QUESTION) {
    return true;
  }
  return state;
}

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

  if (action.type === VOTE) {
    const newQuestions = Object.assign({}, state);

    if (action.vote === 'optionOne') {
      newQuestions[action.questionId].optionOne.votes.push(action.userId);
    } else {
      newQuestions[action.questionId].optionOne.votes.push(action.userId);
    }

    return newQuestions;
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
  qestionCreated: questionCreatedReducer
}), applyMiddleware(thunk));

export default store;
