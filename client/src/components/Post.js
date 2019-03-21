import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
    Card,
    Contents,
    Buttons,
    ButtonHalf,
    cardBorder,
    CardSingle,
    PostTitle
} from '../styles';

const Post = (props) => {
    return (
        <>
        {props.singlePost && <Card className="card" style={cardBorder}>
            <PostTitle>{props.text}</PostTitle>
            <Contents><Link to={`/users/${props.user.id}`}>{props.user.name}</Link></Contents>
            {props.singlePost &&
            <Buttons>
                <ButtonHalf onClick={props.editPost} className="btn btn-primary">EDIT</ButtonHalf>
                <ButtonHalf onClick={props.deletePost} className="btn btn-danger">DELETE</ButtonHalf>
            </Buttons>}
        </Card>}

        {!props.singlePost && <CardSingle className="card" style={cardBorder}>
            <PostTitle>{props.text}</PostTitle>
            <Contents>{props.user.name}</Contents>
        </CardSingle>}
        </>
    );
}


Post.propTypes = {
    editPost: PropTypes.func,
    deletePost: PropTypes.func,
    text: PropTypes.string.isRequired,
    user_id: PropTypes.number,
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }),
    singlePost: PropTypes.bool.isRequired
}

export default Post;