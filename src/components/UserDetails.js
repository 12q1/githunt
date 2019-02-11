import * as React from 'react'
//import request from 'superagent'

export default function UserDetails(props) {
    const user = props.user
    console.log(props.user)
    return (
        <div>
            <h3>{user.login}</h3>
            <img src={user.avatar_url} alt="user avatar" height="100"></img>
            <p>Email: {user.email || "not publicly available"}</p>
            <a href={user.html_url}>Profile</a><br />
            <a href={`https://github.com/${user.login}?tab=repositories`}>Repository</a><br />
            <a href={`https://gist.github.com/${user.login}`}>Gists</a>

        </div>

    )
}