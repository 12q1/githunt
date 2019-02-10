import React, {Component} from 'react';

export default class SearchUser extends Component{
    handleSubmit(event){
        event.preventDefault()
        console.log('Submitting form...')
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="name"/>
                </label>
                <input type="submit" value="Search"/>
            </form>
        )
    }
}