const router = require('express').Router();

// const apiRoutes = require('./api');
const homepageRoute = require('./routes/homepageRoute');

router.use('/', homepageRoute);
// router.use('/api', apiRoutes);


module.exports = router;