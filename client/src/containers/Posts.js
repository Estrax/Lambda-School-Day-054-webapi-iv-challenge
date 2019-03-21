import React from 'react';
import Post from '../components/Post'
import PropTypes from 'prop-types';
import {
    StyledLink
} from '../styles';


const Posts = (props) => {
    return (
        <>
            {props.posts.map((post, i) =>
                <StyledLink
                    to={`/posts/${post.id}`}
                    key={post.id}
                >
                    <Post
                        key={i}
                        text={post.text}
                        user_id={post.user_id}
                        user={props.users.filter(user => user.id===post.user_id)[0]}
                        singlePost={false}
                    />
                </StyledLink>
            )}
        </>
    );
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired
}

export default Posts;