import React from 'react'
import SearchForm from './SearchForm'
import store from '../store'
import {connect} from 'react-redux'
import request from 'superagent'

class SearchFormContainer extends React.Component {
    submit = value => {
        request(`https://api.github.com/search/users?per_page=10&page=1&q=${value.username}`)
            .then(response => store.dispatch(
                {
                    type: 'SEARCH_USER',
                    payload: response.body.items
                }
            ))
    }



    render() {
        return <SearchForm onSubmit={this.submit}/>
    }
}

const mapStateToProps = (state) =>{
    return {
        search:state.search
    }
}

export default connect (mapStateToProps)(SearchFormContainer)