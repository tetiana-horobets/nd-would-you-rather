import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  LOAD_USERS,
  LOAD_QUESTIONS,
  SELECT_USER,
  LOGOUT,
  CHANGE_QUESTIONS_DISPLAY_PREFERENCE,
  VOTE
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

  if (action.type === VOTE) {
    const newQuestions = Object.assign({}, state);

    if (action.vote === 1) {
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

function questionsDisplayPreferenceReducer(state = 'UNANSWERED', action) {
  if (action.type === CHANGE_QUESTIONS_DISPLAY_PREFERENCE) {
    return action.displayedQuestions;
  }
  return state;
}

const store = createStore(combineReducers({
  users: usersReducer,
  selectedUser: selectedUserReducer,
  questions: questionsReducer,
  questionsDisplayPreference: questionsDisplayPreferenceReducer
}), applyMiddleware(thunk));

export default store;
