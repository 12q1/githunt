import * as React from 'react'

export default function UserList(props){
    return(
        <div>
            <h2>Search Results</h2>
            <ul>
                {props.users.map(user =>
                    <li key={user.id} onClick={() => props.selectUser(user.id)}>
                        {user.login}
                    </li>
                    )}
            </ul>
        </div>
    )
}