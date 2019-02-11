import * as React from 'react'
import UserList from './UserList'
import { connect } from 'react-redux'

class UserListContainer extends React.Component {
    selectUser = id => {
        this.props.dispatch(
            {
                type: 'SELECT_USER',
                payload: id
            }
        )
    }

    render() {
        return <UserList users={this.props.users} selectUser={this.selectUser} />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserListContainer)