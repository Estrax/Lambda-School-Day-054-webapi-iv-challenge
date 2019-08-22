import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import NavbarContainer from '../containers/Navbar';
import PostsPage from '../pages/PostsPage';
import PostPage from '../pages/PostPage';
import NewPostPage from '../pages/NewPostPage';
import EditPostPage from '../pages/EditPostPage';
import UsersPage from '../pages/UsersPage';
import UserPage from '../pages/UserPage';
import NewUserPage from '../pages/NewUserPage';
import EditUserPage from '../pages/EditUserPage';

export default (props) => {
    return (
        <Router history={props.history}>
            <div>
                <NavbarContainer />
                <Switch>
                    <Route path="/" exact component={PostsPage}/>
                    <Route path="/posts/new" exact component={NewPostPage}/>
                    <Route path="/posts/:id" exact component={PostPage}/>
                    <Route path="/posts/:id/edit" exact component={EditPostPage}/>
                    <Route path="/users" exact component={UsersPage}/>
                    <Route path="/users/new" exact component={NewUserPage}/>
                    <Route path="/users/:id" exact component={UserPage}/>
                    <Route path="/users/:id/edit" exact component={EditUserPage}/>
                </Switch>
            </div>
        </Router>
    );
}