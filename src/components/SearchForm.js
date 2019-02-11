import React from 'react';
import { Field, reduxForm } from 'redux-form'

let SearchForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="username"
                    component="input"
                    type="text" 
                    placeholder="Search... eg. 12q1"
                />
            </div>
        </form>
    )
}

SearchForm = reduxForm({
    form: 'search'
})(SearchForm)

export default SearchForm