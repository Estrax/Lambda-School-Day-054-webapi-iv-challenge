import React, { Component } from 'react';

import {
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';

import {
    NavbarBrandStyled,
    NavbarStyled,
    LinkStyled
} from '../styles';

class NavbarComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <NavbarStyled light expand="md">
                <NavbarBrandStyled href="/">
                    Day53
                </NavbarBrandStyled>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <LinkStyled to='/' className='nav-link'>
                                All posts
                            </LinkStyled>
                        </NavItem>
                        <NavItem>
                            <LinkStyled to='/posts/new' className='nav-link'>
                                New post
                            </LinkStyled>
                        </NavItem>
                        <NavItem>
                            <LinkStyled to='/users' className='nav-link'>
                                All users
                            </LinkStyled>
                        </NavItem>
                        <NavItem>
                            <LinkStyled to='/users/new' className='nav-link'>
                                New user
                            </LinkStyled>
                        </NavItem>
                    </Nav>
                </Collapse>
            </NavbarStyled>
        );
    }
}

export default NavbarComponent;