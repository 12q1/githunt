import * as React from 'react'

export default function UserDetails(props) {
    const user = props.user
    return (
        <div>
            <h2>{user.login}</h2>
        </div>

    )
}