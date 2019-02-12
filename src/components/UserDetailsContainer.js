import * as React from 'react'
import { connect } from 'react-redux'
import UserDetails from './UserDetails'
import request from 'superagent'

class UserDetailsContainer extends React.Component {
    state = {}

    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            request(`https://api.github.com/users/${this.props.user.login}`)
                .then(response => this.setState({ details: response.body }))
        }
    }

    componentWillUnmount(){
    }

    render() {
        const user = this.state.details
        if (!user) return null
        return <UserDetails user={user} />
        console.log(user)
    }
}

const mapStateToProps = (state) => {
    if (state.selectedUser !== null) {
        return {
            user: state.users.find(user => user.id === state.selectedUser)
        }
    }
    return {}
}

export default connect(mapStateToProps)(UserDetailsContainer)

