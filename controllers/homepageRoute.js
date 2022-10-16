const router = require('express').Router();
const { Entry, User, Comment } = require('../models')
// const withAuth = require('../utils/auth');
const { Op } = require('sequelize')

//Render the homepage with listings
router.get('/', async (req, res) => {
    const entryData = await Entry.findAll({
        include: [{ model: User, attributes: ['name'] }]
    });
    const entries = entryData.map((entry) => entry.get({ plain: true }));

    res.render('homepage', 
    // {
        entries
    //     // logged_in: req.session.logged_in
    // }
    );
});

module.exports = router;
