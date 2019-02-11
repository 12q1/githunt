import React from 'react'
import SearchForm from './SearchForm'
import store from '../store'
import request from 'superagent'

export default class SearchFormContainer extends React.Component {
    submit = value => {
        request(`https://api.github.com/search/users?per_page=50&page=1&q=${value.username}`)
            .then(response => store.dispatch(
                {
                    type: 'SEARCH_USER',
                    payload: response.body.items
                }
            ))
    }

    render() {
        return <SearchForm onSubmit={this.submit} />
    }
}