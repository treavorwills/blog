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
// router.get('/dashboard', withAuth, (req,res) => {
//     res.render('dashboard');
// })
router.get('/dashboard', withAuth, async (req, res) => {
    const entryData = await Entry.findAll({
        include: [{ model: User, attributes: ['name'] }],
        where: {
            user_id: req.session.user_id,
        }
    });
    const entries = entryData.map((entry) => entry.get({ plain: true }));
    // console.log(entries);

    res.render('dashboard',
        {
            entries,
            logged_in: req.session.logged_in
        }
    );
});

module.exports = router;
