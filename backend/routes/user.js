const express = require('express');
const users = require('../data/users');

const router = express.Router();

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
}

// get all the users
router.get('/', (req, res) => {
    try {
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
})

// get user with provided userId
router.get('/:userId', (req, res, next) => {
    try {
        const user = users.find(user => user.id === req.params.userId);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    } catch (err) {
        next(err);
    }
});

// delete user with provided userId
router.delete('/:userId', (req, res, next) => {
    try {
        const newData = users.filter(user => user.id !== req.params.userId);
        res.status(200).json(newData);
    } catch (err) {
        next(err);
    }
});

router.use(errorHandler);

// handle 404 errors
router.all("*", (req, res) => {
    res.status(404).json({
        "error": "API endpoint not found",
        "message": "The requested API endpoint could not be found on this server. Please check that you have entered the correct URL.",
        "status": 404
    });
})


module.exports = router;