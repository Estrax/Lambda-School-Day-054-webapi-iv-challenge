import React, { Component } from 'react';
import UserContainer from '../containers/User';
import { connect } from 'react-redux';
import { fetchUser, fetchUsers, deleteUser, fetchUserPosts } from '../actions';
import { history } from '../';
import PropTypes from 'prop-types';

class UserPage extends Component {
    constructor(props) {
        super(props);

        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }
    async componentDidMount() {
        await this.props.fetchUsers();
        await this.props.fetchUser(this.props.match.params.id);
        await this.props.fetchUserPosts(this.props.match.params.id);
    }

    editUser(e) {
        e.preventDefault();
        history.push(`/users/${this.props.user.id}/edit`);
    }

    deleteUser(e) {
        e.preventDefault();
        this.props.deleteUser(this.props.user.id);
    }

    render() {
        return (
            <>
                {this.props.user && this.props.userPosts && <UserContainer user={this.props.user} editUser={this.editUser} deleteUser={this.deleteUser} users={this.props.users} userPosts={this.props.userPosts} />}
            </>
        );
    }
}

UserPage.propTypes = {
    users: PropTypes.array.isRequired,
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    userPosts: PropTypes.array.isRequired,
    fetchUser: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        user: state.users.user ? state.users.user : {id: -1, name: ''},
        users: state.users.users ? state.users.users : [],
        userPosts: state.users.userPosts ? state.users.userPosts : []
    }
}

const mapDispatchToProps = {
    fetchUser,
    deleteUser,
    fetchUsers,
    fetchUserPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);