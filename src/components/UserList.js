import * as React from 'react'

export default function UserList(props) {
    return (
        <div>
            <h3>Search Results</h3>
            <ul>
                {props.users.map(user =>
                    <li key={user.id} onClick={() => props.selectUser(user.id)}>
                        <img src={user.avatar_url} alt="user avatar" height="20"></img> {user.login}
                    </li>
                )}
            </ul>
        </div>
    )
}