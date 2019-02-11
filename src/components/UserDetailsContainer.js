import * as React from 'react'
import {connect} from 'react-redux'
import UserDetails from './UserDetails'

class UserDetailsContainer extends React.Component {
    render() {
        const user = this.props.user
        if(!user) return null
        return <UserDetails user={user}/>
    }
}

const mapStateToProps = (state) => {
    if (state.selectedUser !== null){
        return {
            user: state.users.find(user => user.id === state.selectedUser)
        }
    }
    return {}
}

export default connect(mapStateToProps)(UserDetailsContainer)

