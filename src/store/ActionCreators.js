import {LOAD_USERS} from './Actions.js'
import {_getUsers} from '../_DATA.js';

export function loadUsers(){
  return dispatch => {
    _getUsers().then(data => dispatch({
      type: LOAD_USERS,
      users: data
    }))
  }
}
