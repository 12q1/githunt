import {combineReducers} from 'redux'
import users from './users'
import selectedUser from './selected-user'

export default combineReducers({
    users,
    selectedUser
})