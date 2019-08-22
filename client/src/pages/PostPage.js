import React, { Component } from 'react';
import PostContainer from '../containers/Post';
import { connect } from 'react-redux';
import { fetchPost, fetchPosts, deletePost, fetchUsers } from '../actions';
import { history } from '../';
import PropTypes from 'prop-types';

class PostPage extends Component {
    constructor(props) {
        super(props);

        this.editPost = this.editPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }
    async componentDidMount() {
        await this.props.fetchPosts();
        await this.props.fetchPost(this.props.match.params.id);
        await this.props.fetchUsers();
    }

    editPost(e) {
        e.preventDefault();
        history.push(`/posts/${this.props.post.id}/edit`);
    }

    deletePost(e) {
        e.preventDefault();
        this.props.deletePost(this.props.post.id);
    }

    render() {
        return (
            <>
                {this.props.post && this.props.users.length > 0 && <PostContainer post={this.props.post} editPost={this.editPost} deletePost={this.deletePost} posts={this.props.posts} users={this.props.users} />}
            </>
        );
    }
}

PostPage.propTypes = {
    posts: PropTypes.array.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        user_id: PropTypes.number.isRequired
    }).isRequired,
    users: PropTypes.array.isRequired,
    fetchPost: PropTypes.func.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        post: state.posts.post ? state.posts.post : {id: -1, text: '', user_id: -1},
        posts: state.posts.posts ? state.posts.posts : [],
        users: state.users.users ? state.users.users : []
    }
}

const mapDispatchToProps = {
    fetchPost,
    deletePost,
    fetchPosts,
    fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);