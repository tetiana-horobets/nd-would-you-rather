import {
  LOAD_USERS,
  LOAD_QUESTIONS,
  SELECT_USER,
  LOGOUT,
  CHANGE_QUESTIONS_DISPLAY_PREFERENCE
} from './Actions.js'
import {_getUsers, _getQuestions} from '../_DATA.js';

export function loadUsers() {
  return dispatch => {
    _getUsers().then(data => dispatch({
      type: LOAD_USERS,
      users: data
    }))
  }
}

export function loadQuestions() {
  return dispatch => {
    _getQuestions().then(data => dispatch({
      type: LOAD_QUESTIONS,
      questions: data
    }))
  }
}

export function selectUser(userId) {
  return {
      type: SELECT_USER,
      selectedUser: userId
  }
}

export function logout() {
  return {
      type: LOGOUT
  }
}

export function showAnsweredQuestions() {
  return {
      type: CHANGE_QUESTIONS_DISPLAY_PREFERENCE,
      displayedQuestions: 'ANSWERED'
  }
}

export function showUnansweredQuestions() {
  return {
      type: CHANGE_QUESTIONS_DISPLAY_PREFERENCE,
      displayedQuestions: 'UNANSWERED'
  }
}
