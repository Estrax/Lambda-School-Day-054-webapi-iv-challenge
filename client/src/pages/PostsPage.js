import React, { Component } from 'react';
import Posts from '../containers/Posts';
import { connect } from 'react-redux';
import { fetchPosts, fetchUsers } from '../actions';
import PropTypes from 'prop-types';
import {
    Title
} from '../styles';

class PostsPage extends Component {
    async componentDidMount() {
        await this.props.fetchPosts();
        await this.props.fetchUsers();
    }

    render() {
        return (
            <>
                <Title>All posts</Title>
                {this.props.posts.length > 0 && this.props.users.length > 0 && <Posts posts={this.props.posts} users={this.props.users} />}
            </>
        );
    }
}

PostsPage.propTypes = {
    posts: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts || [],
        users: state.users.users || []
    }
}

const mapDispatchToProps = {
    fetchPosts,
    fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);