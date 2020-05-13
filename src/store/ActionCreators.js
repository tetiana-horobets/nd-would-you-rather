import {
  LOAD_USERS,
  LOAD_QUESTIONS,
  SELECT_USER,
  LOGOUT
} from './Actions.js'
import {_getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion} from '../_DATA.js';

export function createNewQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    const question = {
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
      author: author
    };
    _saveQuestion(question).then(data => {
      loadQuestions()(dispatch);
      loadUsers()(dispatch);
    })
  }
}

export function vote(userId, questionId, vote) {
  const answer = {authedUser: userId, qid: questionId, answer: vote};
  return dispatch => {
    _saveQuestionAnswer(answer).then(data => {
      loadQuestions()(dispatch);
      loadUsers()(dispatch);
    })
  }
}

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
