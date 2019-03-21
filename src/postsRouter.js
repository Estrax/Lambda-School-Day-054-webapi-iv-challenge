const express = require('express');
const router = express.Router();
const db = require('../data/helpers/postDb');

router.route('/')
    .get(async (req, res) => {
        try {
            const posts = await db.get();
            return res.json(posts);
        } catch(e) {
            return res.status(500).json({ error: "The posts information could not be retrieved." });
        }
    })
    .post(async (req, res) => {
        try {
            const {text, user_id} = req.body;
            if(!text || !user_id) return res.status(400).json({ errorMessage: "Please provide text and user_id for the post." });
            const newPost = await db.insert({
                text,
                user_id,
            })
            return res.status(201).json(newPost);
        } catch(e) {
            return res.status(500).json({ error: "There was an error while saving the post to the database" })
        }
    });

router.route('/:id')
    .get(async (req, res) => {
        try {
            const post = await db.getById(req.params.id);
            if(post.length === 0) return res.status(404).json({ message: "The post with the specified ID does not exist." });
            return res.status(200).json(post);
        } catch(e) {
            return res.status(500).json({ error: "The post information could not be retrieved." });
        }
    })
    .put(async (req, res) => {
        try {
            const {text, user_id} = req.body;
            if(!text || !user_id) return res.status(400).json({ errorMessage: "Please provide text and user ID for the post." });
            const postUpdated = await db.update(req.params.id, { text, user_id })
            if(postUpdated === 0) return res.status(404).json({ message: "The post with the specified ID does not exist." });
            return res.status(200).json(postUpdated);
        } catch(e) {
            return res.status(500).json({ error: "The post information could not be modified." });
        }
    })
    .delete(async (req, res) => {
        try {
            const deletedPost = await db.remove(req.params.id);
            if(deletedPost === 0) return res.status(404).json({ message: "The post with the specified ID does not exist." });
            return res.status(200).json({...deletedPost, removed: true});
        } catch(e) {
            return res.status(500).json({ error: "The post could not be removed" })
        }
    });

module.exports = router;