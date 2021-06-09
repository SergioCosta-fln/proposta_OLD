const { query } = require('express');
const express = require('express');

// Rotas
const router = express.Router();

router.get('/', (req, res) => {

    let obj = {
        pageTitle: 'Propostas'
    }; 
    res.render('home', obj);
});

module.exports = router;