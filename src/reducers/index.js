import {combineReducers} from 'redux'
import users from './users'
import selectedUser from './selected-user'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    users,
    selectedUser,
    form: formReducer
})