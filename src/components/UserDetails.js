import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class UserDetails extends Component{
    static propTypes = {
        name: PropTypes.string.isRequired
    }
    render(){
        return (
            <li classname='details'>
                <p classname='username'>{this.props.name}</p>
            </li>
        )
    }
}