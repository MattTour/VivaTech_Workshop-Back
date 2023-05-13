var express = require('express');
var router = express.Router();

const user = require('../models/user');

router.get('/', async(req, res) => {
    let users = await user.findAll();
    res.status(200).json(users);
});

router.get('/:userId', async(req, res) => {
    let { userId } = req.params;
    let unUser = await user.findByPk(userId);
    res.status(200).json(unUser);
});

module.exports = router;
