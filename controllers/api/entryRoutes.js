const router = require('express').Router();
const xss = require("xss");
const { Entry, User } = require('../../models');
const withAuth = require('../../utils/auth');

module.exports = router;

// GET all entries
router.get('/', async (req, res) => {
    try {
        const entryData = await Entry.findAll({
            include: [{ model: User, attributes: ['name'] }],
        });
        res.status(200).json(entryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single entry
router.get('/:id', async (req, res) => {
    try {
        const listingData = await entry.findOne({
            include: [{ model: User, attributes: ['name'] }],
            where: {
                id: req.params.id,
            },
        });
        if (!entryData) {
            res.status(404).json({ message: 'No entry with that ID found!' });
            return;
        }
        res.status(200).json(entryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new Entry
// router.post('/', async (req, res) => {
//     try {
//         const titleS = req.body.title;
//         const bodyS = req.body.body;

//         const titleX = xss(titleS, {
//             whiteList: {},
//             stripIgnoreTag: true,
//             stripIgnoreTagBody: ["script"],
//         });

//         const bodyX = xss(bodyS, {
//             whiteList: {},
//             stripIgnoreTag: true,
//             stripIgnoreTagBody: ["script"],
//         });

//         const newEntry = await Entry.create({
//             title: titleX,
//             body: bodyX,
//         });
//         res.status(200).json(newEntry);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });
router.post('/', withAuth, async (req, res) => {
    try {
      const newEntry = await Entry.create({
        title: req.body.title,
        body: req.body.entryBody,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newEntry);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// UPDATE an entry
router.put('/:id', async (req, res) => {
    try {
        const entryData = await Entry.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!entryData[0]) {
            res.status(404).json({ message: "No listing with that ID found!" });
            return;
        }
        res.status(200).json(entryData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// DELETE an entry
router.delete('/:id', async (req, res) => {
    try {
        const userData = await Entry.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!userData) {
            res.status(404).json({ message: 'No entry with this id!' });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});