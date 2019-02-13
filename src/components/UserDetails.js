import * as React from 'react'

export default function UserDetails(props) {
    const user = props.user
    const repos = props.repo
    console.log(props)
    return (
        <div className="Contacts">
            <h3>{user.login}</h3>
            <img src={user.avatar_url} alt="user avatar" height="200"></img>
            <p>Email: {user.email || "Not available"}</p>
            <p>Name: {user.name || "Not available"}</p>
            <a href={user.html_url}>Profile</a><br />
            <a href={`https://github.com/${user.login}?tab=repositories`}>Repository</a><br />
            <a href={`https://gist.github.com/${user.login}`}>Gists</a>
            <div className="repos">
            <p>{user.login}'s most recent repos</p>
            <ul>
            {repos.map(repo => <li key={repo.id}><a href={`https://github.com/${repo.full_name}`}>{repo.name}</a><br/>
            <p>{repo.description}</p></li>)}
            </ul>
            </div>
            
        </div>

    )
}