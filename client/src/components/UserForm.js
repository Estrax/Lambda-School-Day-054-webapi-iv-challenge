import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, updateUser, fetchUser } from '../actions';
import {
    SubmitBtn,
    Title,
    FormComponent
} from '../styles';
import PropTypes from 'prop-types';

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addUser = this.addUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }
    
    componentDidMount() {
        if(!this.props.addForm){
            this.props.fetchUser(this.props.userID).then(_ => {
                this.setState({
                    name: this.props.name,
                });
            });
        }
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    addUser(e) {
        e.preventDefault();
        this.props.addUser({
            name: this.state.name
        });
    }

    updateUser(e) {
        e.preventDefault();
        this.props.updateUser({
            id: this.props.userID,
            name: this.state.name
        });
    }

    render() {
        return (
            <>
                <FormComponent onSubmit={this.props.addForm ? this.addUser : this.updateUser} className="card">
                    <Title>
                        {this.props.addForm && "Add user"}
                        {!this.props.addForm && "Update user"}
                    </Title>
                    
                    <input
                        type="text"
                        name="name"
                        placeholder="User name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />

                    <SubmitBtn
                        type="submit"
                        name="submit"
                        className="btn btn-primary"
                    />
                </FormComponent>
            </>
        );
    }
}

UserForm.propTypes = {
    name: PropTypes.string.isRequired,
    addForm: PropTypes.bool.isRequired,
    addUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    fetchUser: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        name: state.users.user ? state.users.user.name : ''
    }
}

const mapDispatchToProps = {
    addUser,
    updateUser,
    fetchUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);