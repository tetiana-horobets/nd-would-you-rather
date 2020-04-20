import {LOAD_USERS, SELECT_USER} from './Actions.js'
import {_getUsers} from '../_DATA.js';

export function loadUsers() {
  return dispatch => {
    _getUsers().then(data => dispatch({
      type: LOAD_USERS,
      users: data
    }))
  }
}

export function selectUser(userId) {
  return {
      type: SELECT_USER,
      selectedUser: userId
  }
}
