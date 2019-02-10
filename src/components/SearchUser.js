import React, {Component} from 'react';

export default class SearchUser extends Component{
    state = {name:''} //storing name in local state 

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(`Fetching ${this.state.name}'s details`)
        fetch( `https://api.github.com/users/${this.state.name}`)
            .then(response => {return response.json()})
            .then(unpack => {console.log(unpack)})
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Github Username:
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
                </label>
                <input type="submit" value="Search"/>
            </form>
        )
    }
}