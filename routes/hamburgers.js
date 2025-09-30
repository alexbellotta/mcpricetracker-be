const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/add', (req,res) => {
    const {name, price} = req.body;
    if(!name || !price) return res.status(400).json({message: 'Missing fields'});
    db.query(
        'INSERT INTO hamburgers (name, price) VALUES (?,?)',
        [name, price],
        (err, result) =>{
            if(err) return res.status(500).json({error: err});
            return res.json({success: true, id: result.insertId});
        }
    );
});

module.exports = router;