const router = require('express').Router();
const { Entry, User, Comment } = require('../../models')
const withAuth = require('../../utils/auth');
const { Op } = require('sequelize')

//Render the homepage with postings
router.get('/', async (req, res) => {
    const entryData = await Entry.findAll({
        include: [{ model: User, attributes: ['name'] }]
    });
    const entries = entryData.map((entry) => entry.get({ plain: true }));
    // console.log(entries);

    res.render('homepage',
        {
            entries,
            logged_in: req.session.logged_in
        }
    );
});

// render a single listing
router.get('/entry/:id', async (req, res) => {
    try {
        const entryData = await Entry.findByPk(req.params.id, {
            include: [{ model: User, attributes: ['name'] }]
        });
        const entry = entryData.get({ plain: true });
        console.log(entry);

        res.render('singleEntry',
            {
                ...entry,
                logged_in: req.session.logged_in
            }
        );
    } catch (err) {
        res.status(500).json(err);
    }
});

//redirect login from withAuth if theyre not logged in 
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

//Signup route
router.get('/signup', (req, res) => {
    res.render('signup');
});

// dashboard route
router.get('/dashboard', withAuth, async (req, res) => {
    const entryData = await Entry.findAll({
        include: [{ model: User, attributes: ['name'] }],
        where: {
            user_id: req.session.user_id,
        }
    });
    const entries = entryData.map((entry) => entry.get({ plain: true }));
    // console.log(entries);

    res.render('dashboardNew',
        {
            entries,
            logged_in: req.session.logged_in
        }
    );
});

//Render the entries that match the search results
router.get('/search/:id', async (req, res) => {
    let searchTerm = req.params.id;
    const entryData = await Entry.findAll({
        include: [{ model: User, attributes: ['name'] }],
        where: {
            [Op.or]: [
            {title: {[Op.like]: `%${searchTerm}%`}},
            {body: {[Op.like]: `%${searchTerm}%`}}
            ]
        },
    });
    const entries = entryData.map((entry) => entry.get({ plain: true }));
        if (entries.length != 0) {
            res.render('homepage',
        {
            entries,
            logged_in: req.session.logged_in
        }
        )
     } else {
            res.render('./partials/noEntries', {
                entries,
                logged_in: req.session.logged_in
            })
        }
});

router.get('/dashboard/:id', withAuth, async (req, res) => {
    const entryData = await Entry.findAll({
        include: [{ model: User, attributes: ['name'] }],
        where: {
            user_id: req.session.user_id,
        }
    });
    const entries = entryData.map((entry) => entry.get({ plain: true }));
    const singleData = await Entry.findByPk(req.params.id);
    const singleEntry = singleData.get({plain: true});
    // console.log(entries);

    res.render('dashboardView',
        {
            entries,
            singleEntry,
            logged_in: req.session.logged_in
        }
    );
});

module.exports = router;
