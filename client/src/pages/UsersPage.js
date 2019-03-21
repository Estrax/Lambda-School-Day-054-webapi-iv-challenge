import React, { Component } from 'react';
import Users from '../containers/Users';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import PropTypes from 'prop-types';
import {
    Title
} from '../styles';

class UsersPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <>
                <Title>All users</Title>
                <Users users={this.props.users} />
            </>
        );
    }
}

UsersPage.propTypes = {
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        users: state.users.users || []
    }
}

const mapDispatchToProps = {
    fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);