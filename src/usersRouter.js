const express = require('express');
const router = express.Router();
const db = require('../data/helpers/userDb');
const middleware = require('./routerMiddleware');

router.route('/')
    .get(async (req, res) => {
        try {
            const users = await db.get();
            return res.json(users);
        } catch(e) {
            return res.status(500).json({ error: "The users information could not be retrieved." });
        }
    })
    .post(middleware, async (req, res) => {
        try {
            const {name} = req.body;
            if(!name) return res.status(400).json({ errorMessage: "Please provide name for the user." });
            const newUser = await db.insert({
                name
            })
            return res.status(201).json(newUser);
        } catch(e) {
            return res.status(500).json({ error: "There was an error while saving the user to the database" });
        }
    });

router.route('/:id')
    .get(async (req, res) => {
        try {
            const user = await db.getById(req.params.id);
            if(user.length === 0) return res.status(404).json({ message: "The user with the specified ID does not exist." });
            return res.status(200).json(user);
        } catch(e) {
            return res.status(500).json({ error: "The user information could not be retrieved." });
        }
    })
    .put(middleware, async (req, res) => {
        try {
            const {name} = req.body;
            if(!name) return res.status(400).json({ errorMessage: "Please provide name for the user." });
            const userUpdated = await db.update(req.params.id, { name })
            if(userUpdated === 0) return res.status(404).json({ message: "The user with the specified ID does not exist." });
            return res.status(200).json(userUpdated);
        } catch(e) {
            return res.status(500).json({ error: "The user information could not be modified." });
        }
    })
    .delete(async (req, res) => {
        try {
            const deletedUser = await db.remove(req.params.id);
            if(deletedUser === 0) return res.status(404).json({ message: "The user with the specified ID does not exist." });
            return res.status(200).json({...deletedUser, removed: true});
        } catch(e) {
            return res.status(500).json({ error: "The user could not be removed" })
        }
    });

router.route('/:id/posts')
    .get(async (req, res) => {
        try {
            const userPosts = await db.getUserPosts(req.params.id);
            return res.status(200).json(userPosts);
        } catch(e) {
            return res.status(500).json({ error: "Cannot get posts for this user" });
        }
    });

module.exports = router;