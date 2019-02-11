import React from 'react'
import SearchForm from './SearchForm'
import store from '../store'
import {connect} from 'react-redux'

class SearchFormContainer extends React.Component {
    submit = values => {
        console.log(values)
        store.dispatch(
            {
                type: 'SEARCH_USER',
                payload: values
            }
        )
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