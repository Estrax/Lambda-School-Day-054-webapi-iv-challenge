import React from 'react';
import User from '../components/User'
import PropTypes from 'prop-types';
import {
    StyledLink
} from '../styles';


const Users = (props) => {
    return (
        <>
            {props.users.map((user, i) => 
                <StyledLink
                    to={`/users/${user.id}`}
                    key={user.id}
                >
                    <User
                        key={i}
                        name={user.name}
                        singleUser={false}
                    />
                </StyledLink>
            )}
        </>
    );
}

Users.propTypes = {
    users: PropTypes.array.isRequired
}

export default Users;