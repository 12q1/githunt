import * as React from 'react'
import { connect } from 'react-redux'
import UserDetails from './UserDetails'
import request from 'superagent'

class UserDetailsContainer extends React.Component {
    state = {}

    componentDidUpdate(prevProps) {
        if (this.props.user === undefined) return null
        if (this.props.user !== prevProps.user) {
            request(`https://api.github.com/users/${this.props.user.login}`)
                .then(response => this.setState({ details: response.body }))
            request(`https://api.github.com/users/${this.props.user.login}/repos?per_page=8&sort=pushed`)
                .then(response => this.setState({ repos: response.body }))
        }
    }

    render() {
        const user = this.state.details
        const repos = this.state.repos
        if (!user || !repos) return null
        return <UserDetails user={user} repo={repos} />
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

