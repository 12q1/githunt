import React, {Component} from 'react';
import UserDetails from './UserDetails';
import PropTypes from 'prop-types';

export default class DetailContainer extends Component{
    static propTypes = {
        name: PropTypes.string.isRequired
    }
    render(){
        return (
            <UserDetails/>
        )
    }
}