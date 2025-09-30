const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/login', (req, res) => {
    const {username, password} = req.body;
    db.query(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (err, result) => {
            if(err) return res.status(500).json({error: err});
            if(result.length > 0) return res.json({success: true});
            else return res.status(401).json({success: false, message: 'Invalid credentials'});
        }
    );
});

module.exports = router;