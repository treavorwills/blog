const router = require('express').Router();
const userRoutes = require('./userRoutes');
const entryRoutes = require('./entryRoutes.js');

router.use('/user', userRoutes);
router.use('/entry', entryRoutes);

module.exports = router;
