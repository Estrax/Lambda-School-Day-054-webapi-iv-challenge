import React from 'react';
import User from '../components/User';
import PropTypes from 'prop-types';

const UserContainer = (props) => {
    return (
        <>
            <User
                key={props.user.id}
                id={props.user.id}
                name={props.user.name}
                editUser={props.editUser}
                deleteUser={props.deleteUser}
                userPosts={props.userPosts}
                singleUser={true}
            />
        </>
    );
}

UserContainer.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    userPosts: PropTypes.array.isRequired,
    editUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired
}

export default UserContainer;