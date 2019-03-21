import React from 'react';
import PropTypes from 'prop-types';

import {
    Card,
    Title,
    Buttons,
    ButtonHalf,
    cardBorder,
    CardSingle,
    StyledLink
} from '../styles';
import Post from './Post';

const User = (props) => {
    return (
        <>
        {props.singleUser && <Card className="card" style={cardBorder}>
            <Title>{props.name}</Title>
            {props.singleUser &&
            <Buttons>
                <ButtonHalf onClick={props.editUser} className="btn btn-primary">EDIT</ButtonHalf>
                <ButtonHalf onClick={props.deleteUser} className="btn btn-danger">DELETE</ButtonHalf>
            </Buttons>}
        </Card>}
        {props.singleUser && props.userPosts &&
            props.userPosts.map(post => 
                <StyledLink key={post.id} to={`/posts/${post.id}`}>
                    <Post key={post.id} text={post.text} user_id={post.user_id} user={{id: props.id, name: ''}} singlePost={false} />
                </StyledLink>
                )
        }

        {!props.singleUser && <CardSingle className="card" style={cardBorder}>
            <Title>{props.name}</Title>
        </CardSingle>}
        </>
    );
}


User.propTypes = {
    editUser: PropTypes.func,
    deleteUser: PropTypes.func,
    userPosts: PropTypes.array,
    name: PropTypes.string.isRequired,
    singleUser: PropTypes.bool.isRequired
}

export default User;