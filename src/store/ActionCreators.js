import {
  LOAD_USERS,
  LOAD_QUESTIONS,
  SELECT_USER,
  LOGOUT,
  CHANGE_QUESTIONS_DISPLAY_PREFERENCE,
  VOTE,
  CREATE_NEW_QUESTION
} from './Actions.js'
import {_getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion} from '../_DATA.js';

export function createNewQuestion(optionOneText, optionTwoText, userId) {
  const question = {optionOneText: optionOneText, optionTwoText: optionTwoText, userId: userId};
  _saveQuestion(question);
  return {
      type: CREATE_NEW_QUESTION,
      userId: userId,
      optionOneText: optionOneText,
      optionTwoText: optionTwoText
  }
}

export function vote(userId, questionId, vote) {
  const answer = {authedUser: userId, qid: questionId, answer: vote};
  _saveQuestionAnswer(answer);
  return {
      type: VOTE,
      userId: userId,
      questionId: questionId,
      vote: vote
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
